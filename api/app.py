from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from lunar_python import Solar  # ✅ 精确排盘
import os

app = Flask(__name__)
# 生产可改成只允许你的前端域名：
# CORS(app, resources={r"/*": {"origins": "https://astro.5xliving.com"}})
CORS(app)

STEM_ELEMENTS = {
    "甲":"木","乙":"木","丙":"火","丁":"火","戊":"土",
    "己":"土","庚":"金","辛":"金","壬":"水","癸":"水"
}
BRANCH_ELEMENTS = {
    "子":"水","丑":"土","寅":"木","卯":"木","辰":"土","巳":"火",
    "午":"火","未":"土","申":"金","酉":"金","戌":"土","亥":"水"
}

def split_ganzhi(gz: str):
    # lunar-python 返回如 "甲子"，拆成天干/地支
    return gz[:1], gz[1:]

def accurate_pillars(birth_date: str, birth_time: str):
    """
    ✅ 使用 lunar-python 精确计算 年/月/日/时 的干支（含节气切换，非简化算法）
    说明：默认把传入时间当作本地时区时间（建议使用 +08:00 地区的本地时间）
    """
    dt = datetime.strptime(f"{birth_date} {birth_time}", "%Y-%m-%d %H:%M")
    solar = Solar.fromYmdHms(dt.year, dt.month, dt.day, dt.hour, dt.minute, 0)
    lunar = solar.getLunar()

    y_stem, y_branch = split_ganzhi(lunar.getYearInGanZhi())
    m_stem, m_branch = split_ganzhi(lunar.getMonthInGanZhi())
    d_stem, d_branch = split_ganzhi(lunar.getDayInGanZhi())
    h_stem, h_branch = split_ganzhi(lunar.getTimeInGanZhi())

    pillars = [
        {"heavenly_stem": y_stem, "earthly_branch": y_branch},
        {"heavenly_stem": m_stem, "earthly_branch": m_branch},
        {"heavenly_stem": d_stem, "earthly_branch": d_branch},
        {"heavenly_stem": h_stem, "earthly_branch": h_branch},
    ]
    # 标注每柱五行（以天干为主，缺则取地支）
    for p in pillars:
        p["element"] = STEM_ELEMENTS.get(p["heavenly_stem"]) or BRANCH_ELEMENTS.get(p["earthly_branch"]) or "木"

    return pillars, dt

def summarize_free(birth_date, birth_time, gender):
    pillars, dt = accurate_pillars(birth_date, birth_time)  # ✅ 用精确排盘

    # 五行计数
    fe_count = {"木":0,"火":0,"土":0,"金":0,"水":0}
    for p in pillars:
        fe_count[p["element"]] += 1

    # 日主 = 日柱天干
    day_stem = pillars[2]["heavenly_stem"]
    day_master_element = STEM_ELEMENTS.get(day_stem, "木")

    # 强弱（免费概述规则）
    max_ele = max(fe_count, key=fe_count.get)
    strength_level = "中强" if fe_count[max_ele] >= 2 else "中平"
    strength_description = f"命局{max_ele}较旺，整体为{strength_level}，需协调其它五行。"

    # 基础性格/事业/感情
    personality = {
        "木":"理想感强，向上生发，重原则与成长",
        "火":"外向主动，表达力强，重热情与速度",
        "土":"稳重务实，重秩序与承载",
        "金":"果断决策，重规则与效率",
        "水":"思维流动，善沟通学习，重灵活"
    }[day_master_element]

    career_basic = {
        "木":"宜创意教育健康等长期积累型；先打造口碑与作品库。",
        "火":"宜传播演讲销售培训等快节奏；善用人脉与曝光。",
        "土":"宜管理地产供应链等稳健运营；重流程与复盘。",
        "金":"宜金融法务质量工业等规则明确；以专业换价值。",
        "水":"宜新媒体科研贸易数据等灵活多变；重信息差。"
    }[day_master_element]

    relationships = {
        "木":"直率重边界，宜多倾听与包容，避免僵硬坚持。",
        "火":"热烈但易急，宜放慢节奏与耐心，避免情绪化。",
        "土":"重承诺但慢热，宜增强表达与柔软度。",
        "金":"清晰果断但偏硬，宜多赞美与接纳。",
        "水":"温和机智但易摇摆，宜定节奏与稳定性。"
    }[day_master_element]

    # 五行协调
    coordination_advice = {
        "木":"多接触绿色植物/林地与阅读学习；少辛辣油炸；用木质家具与东方气场。",
        "火":"多阳光/暖色/社交；少去阴寒环境与长夜熬灯；午时动、子时眠。",
        "土":"多亲近大地/园艺，稳定作息；少频繁搬动；居家以米黄土色稳场。",
        "金":"多做清理收纳与规则化；少拖延；可用金属器物/金白色调提气。",
        "水":"多亲水旅行与思考流动；少过劳；用蓝黑色系与北方气场安神。"
    }[day_master_element]

    # 幸运
    lucky_map = {
        "木": {"colors":["青绿","木青"], "directions":["东","东南"], "numbers":[3,8]},
        "火": {"colors":["朱红","绛紫"], "directions":["南"],     "numbers":[9]},
        "土": {"colors":["土黄","咖"],   "directions":["中","西南"], "numbers":[5]},
        "金": {"colors":["白金","银"],   "directions":["西","西北"], "numbers":[4,7]},
        "水": {"colors":["黛蓝","玄黑"], "directions":["北"],     "numbers":[1,6]},
    }
    lucky = lucky_map[day_master_element]

    # 结构与提示（免费不做流年/择日）
    structure = "木火通明" if fe_count["木"] + fe_count["火"] >= 3 else "均衡格局"
    tips = "多用火土气场，利南方发展；减少阴寒与久坐熬夜。"

    elements_balance = "木:{木} 火:{火} 土:{土} 金:{金} 水:{水}".format(**fe_count)

    return {
        "pillars": pillars,                       # 年/月/日/时（含 element）
        "solar_date": dt.strftime("%Y-%m-%d"),
        "birth_time": dt.strftime("%H:%M"),
        "day_master": day_stem,
        "day_master_element": day_master_element,
        "elements_balance": elements_balance,
        "strength_level": strength_level,
        "strength_description": strength_description,
        "personality_traits": personality,
        "career_suggestions": career_basic,
        "relationships_advice": relationships,

        # 免费扩展：协调 + 三大趋势（不与 VIP 冲突）
        "coordination_advice": coordination_advice,
        "love_summary": f"姻缘趋势：{ {'木':'重成长与沟通','火':'重热度与共情','土':'重承诺与稳定','金':'重原则与边界','水':'重安全感与流动'}[day_master_element] }",
        "career_summary_basic": f"事业趋势：{ {'木':'长期积累型','火':'快速推广型','土':'稳健运营型','金':'制度团队型','水':'灵活多元型'}[day_master_element] }",
        "wealth_summary": f"财运趋势：{ {'木':'稳健积累为宜','火':'顺势快进快出','土':'稳中求进','金':'专业规则获利','水':'多元流动布局'}[day_master_element] }",

        "structure": structure,
        "useful_god": lucky["colors"][0] if lucky["colors"] else "火",
        "tips": tips,
        "lucky_colors": "、".join(lucky["colors"]),
        "lucky_directions": "、".join(lucky["directions"]),
        "lucky_numbers": "、".join(map(str, lucky["numbers"])),
    }

@app.route("/")
def index():
    return "5XLiving Bazi API is running."

@app.route("/bazi", methods=["POST"])
def bazi():
    data = request.get_json(force=True, silent=True) or {}
    birth_date = data.get("birth_date")
    birth_time = data.get("birth_time")
    gender     = data.get("gender")

    if not (birth_date and birth_time and gender):
        return jsonify({"error":"Missing required fields"}), 400

    try:
        out = summarize_free(birth_date, birth_time, gender)
        return jsonify(out)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

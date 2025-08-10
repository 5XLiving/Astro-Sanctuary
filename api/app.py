from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # 允许跨域给 astro.5xliving.com

# ——— 简单五行映射（示例）：天干/地支 → 五行，用于免费版概述 —— #
STEM_ELEMENTS = {
    "甲":"木","乙":"木","丙":"火","丁":"火","戊":"土",
    "己":"土","庚":"金","辛":"金","壬":"水","癸":"水"
}
BRANCH_ELEMENTS = {
    "子":"水","丑":"土","寅":"木","卯":"木","辰":"土","巳":"火",
    "午":"火","未":"土","申":"金","酉":"金","戌":"土","亥":"水"
}
STEMS = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
BRANCHES = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
ELEMENTS = ["木","火","土","金","水"]

def quick_pillars(birth_date: str, birth_time: str):
    """
    轻量“示例级”推演：按年月日时做简单索引，供免费版概述展示。
    不是正式排盘，仅用于占位 & 前端展示全面信息。
    """
    # 解析
    dt = datetime.strptime(f"{birth_date} {birth_time}", "%Y-%m-%d %H:%M")
    y = (dt.year - 4) % 10
    yb = (dt.year - 4) % 12
    m = (dt.month) % 10
    mb = (dt.month) % 12
    d = (dt.day) % 10
    db = (dt.day) % 12
    h = (dt.hour) % 10
    hb = (dt.hour) % 12

    pillars = [
        {"heavenly_stem": STEMS[y], "earthly_branch": BRANCHES[yb]},
        {"heavenly_stem": STEMS[m], "earthly_branch": BRANCHES[mb]},
        {"heavenly_stem": STEMS[d], "earthly_branch": BRANCHES[db]},
        {"heavenly_stem": STEMS[h], "earthly_branch": BRANCHES[hb]},
    ]
    # 给每柱补 element（用天干为主，缺则用地支）
    for p in pillars:
        el = STEM_ELEMENTS.get(p["heavenly_stem"]) or BRANCH_ELEMENTS.get(p["earthly_branch"]) or "木"
        p["element"] = el
    return pillars, dt

def summarize_free(birth_date, birth_time, gender):
    pillars, dt = quick_pillars(birth_date, birth_time)
    # 五行计数
    fe_count = {"木":0,"火":0,"土":0,"金":0,"水":0}
    for p in pillars:
        fe_count[p["element"]] = fe_count.get(p["element"], 0) + 1

    # 以“日柱天干”做日主（示例）
    day_stem = pillars[2]["heavenly_stem"]
    day_master_element = STEM_ELEMENTS.get(day_stem, "木")

    # 强弱（示例规则，仅用于免费概述）
    max_ele = max(fe_count, key=fe_count.get)
    strength_level = "中强" if fe_count[max_ele] >= 2 else "中平"
    strength_description = f"命局{max_ele}较旺，整体为{strength_level}，需协调其它五行。"

    # 基础建议（按元素做一版示例引导，可随品牌口吻微调）
    personality = {
        "木":"理想感强，向上生发，重原则与成长",
        "火":"外向主动，表达力强，重热情与速度",
        "土":"稳重务实，重秩序与承载",
        "金":"果断决策，重规则与效率",
        "水":"思维流动，善沟通学习，重灵活"
    }[day_master_element]

    career = {
        "木":"教育/内容/咨询/设计/健康服务",
        "火":"传播/公关/直播/培训/餐饮",
        "土":"项目管理/地产/供应链/后勤",
        "金":"金融/法务/运营/质量/工业",
        "水":"新媒体/研发/外贸/数据/旅游"
    }[day_master_element]

    relationships = {
        "木":"表达直率但在意边界，宜多倾听与包容",
        "火":"热情主动但易急，宜放慢节奏与耐心",
        "土":"重承诺但慢热，宜增强表达与柔软度",
        "金":"清晰果断但偏硬，宜多赞美与接纳",
        "水":"温和机智但摇摆，宜定节奏与稳定性"
    }[day_master_element]

    # Lucky & 提示（示例）
    lucky_map = {
        "木": {"colors":["青绿","木青"], "directions":["东","东南"], "numbers":[3,8]},
        "火": {"colors":["朱红","绛紫"], "directions":["南"], "numbers":[9]},
        "土": {"colors":["土黄","咖"], "directions":["中","西南"], "numbers":[5]},
        "金": {"colors":["白金","银"], "directions":["西","西北"], "numbers":[4,7]},
        "水": {"colors":["黛蓝","玄黑"], "directions":["北"], "numbers":[1,6]},
    }
    lucky = lucky_map[day_master_element]

    # 结构与宜忌（示例）
    structure = "木火通明" if fe_count["木"]+fe_count["火"] >= 3 else "均衡格局"
    tips = "多用火土气场，利南方发展；少涉过寒之地与长夜熬灯。"

    # 元素比例文本
    elements_balance = f"木:{fe_count['木']} 火:{fe_count['火']} 土:{fe_count['土']} 金:{fe_count['金']} 水:{fe_count['水']}"

    return {
        # —— 你前端期望的字段 —— #
        "pillars": pillars,                                    # 数组：年/月/日/时
        "solar_date": dt.strftime("%Y-%m-%d"),
        "birth_time": dt.strftime("%H:%M"),
        "day_master": day_stem,
        "day_master_element": day_master_element,
        "elements_balance": elements_balance,
        "strength_level": strength_level,
        "strength_description": strength_description,
        "personality_traits": personality,
        "career_suggestions": career,
        "relationships_advice": relationships,
        # 也保留你之前显示的：
        "structure": structure,
        "useful_god": lucky["colors"][0] if lucky["colors"] else "火",  # 兼容旧字段名
        "tips": tips,
        # Lucky 拆分给前端用
        "lucky_colors": "、".join(lucky["colors"]),
        "lucky_directions": "、".join(lucky["directions"]),
        "lucky_numbers": "、".join(map(str, lucky["numbers"]))
    }

@app.route("/")
def index():
    return "5XLiving Bazi API is running."

@app.route("/bazi", methods=["POST"])
def bazi():
    data = request.get_json(force=True, silent=True) or {}
    birth_date = data.get("birth_date")
    birth_time = data.get("birth_time")
    gender     = data.get("gender")  # 目前未用，可用于文案分流

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

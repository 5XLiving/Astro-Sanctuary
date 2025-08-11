from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from lunar_python import Solar
import os

app = Flask(__name__)
# 生产可收紧来源域名：
# CORS(app, resources={r"/*": {"origins": "https://astro.5xliving.com"}})
CORS(app)

# 五行映射
STEM_ELEMENTS = {
    "甲":"木","乙":"木","丙":"火","丁":"火","戊":"土",
    "己":"土","庚":"金","辛":"金","壬":"水","癸":"水"
}
BRANCH_ELEMENTS = {
    "子":"水","丑":"土","寅":"木","卯":"木","辰":"土","巳":"火",
    "午":"火","未":"土","申":"金","酉":"金","戌":"土","亥":"水"
}
ANIMALS = {"子":"鼠","丑":"牛","寅":"虎","卯":"兔","辰":"龙","巳":"蛇","午":"马","未":"羊","申":"猴","酉":"鸡","戌":"狗","亥":"猪"}

def _split_gz(gz: str):
    # lunar-python 返回如“甲子”，拆天干/地支
    return gz[:1], gz[1:]

def _pillar_pkg(stem: str, branch: str, nayin: str, title: str):
    # 组合一个柱：干支/五行/纳音
    return {
        "title": title,
        "heavenly_stem": stem,
        "earthly_branch": branch,
        "stem_element": STEM_ELEMENTS.get(stem),
        "branch_element": BRANCH_ELEMENTS.get(branch),
        "element": STEM_ELEMENTS.get(stem) or BRANCH_ELEMENTS.get(branch),
        "nayin": nayin
    }

def compute_pillars(birth_date: str, birth_time: str):
    """使用 lunar-python 精确计算四柱（含节气切换）。"""
    dt = datetime.strptime(f"{birth_date} {birth_time}", "%Y-%m-%d %H:%M")
    solar = Solar.fromYmdHms(dt.year, dt.month, dt.day, dt.hour, dt.minute, 0)
    lunar = solar.getLunar()

    # 干支
    y_s, y_b = _split_gz(lunar.getYearInGanZhi())
    m_s, m_b = _split_gz(lunar.getMonthInGanZhi())
    d_s, d_b = _split_gz(lunar.getDayInGanZhi())
    h_s, h_b = _split_gz(lunar.getTimeInGanZhi())

    # 纳音（lunar-python 直接提供）
    y_ny = lunar.getYearNaYin()
    m_ny = lunar.getMonthNaYin()
    d_ny = lunar.getDayNaYin()
    h_ny = lunar.getTimeNaYin()

    pillars = [
        _pillar_pkg(y_s, m:=y_b, y_ny, "年柱"),
        _pillar_pkg(m_s, m_b, m_ny, "月柱"),
        _pillar_pkg(d_s, d_b, d_ny, "日柱"),
        _pillar_pkg(h_s, h_b, h_ny, "时柱"),
    ]
    year_branch = y_b
    year_animal = ANIMALS.get(year_branch, "")

    return pillars, dt, year_animal

def count_elements_both(pillars):
    """同时统计天干/地支两套五行（总数=8，更饱满）"""
    cnt = {"木":0,"火":0,"土":0,"金":0,"水":0}
    for p in pillars:
        se = p.get("stem_element"); be = p.get("branch_element")
        if se: cnt[se] += 1
        if be: cnt[be] += 1
    return cnt

def ratio_text(cnt):
    total = sum(cnt.values()) or 1
    order = ["木","火","土","金","水"]
    parts = []
    for k in order:
        v = cnt[k]; pct = round(v*100/total)
        parts.append(f"{k}:{v}（{pct}%）")
    return " / ".join(parts)

def personality_by(element: str):
    return {
        "木":"理想感强，向上生发，重原则与成长；富同理与正义感。",
        "火":"外向主动，表达力强，反应快；热情感染力佳。",
        "土":"稳重务实，抗压承载力强；守纪律、讲信誉。",
        "金":"果断利落，规则清晰；擅长定标准、抓效率。",
        "水":"思维流动，善沟通与学习；适应力与创意兼备。"
    }[element]

def career_by(element: str):
    return {
        "木":"教育/内容/出版/设计/策划/心理/医疗/健康服务/公益；长期作品与口碑累积路线。",
        "火":"传播/媒体/直播/培训/市场/餐饮/活动策划；借势推广与人脉运营。",
        "土":"项目管理/地产/供应链/土建/农林/职能后勤；制度流程与长期运营。",
        "金":"金融/法务/风控/审计/质管/工业制造；凭专业规则换价值。",
        "水":"新媒体/科研/互联网/外贸/咨询/数据分析/旅游；信息差与流动布局。"
    }[element]

def relationships_by(element: str):
    return {
        "木":"直率重边界，宜多倾听与包容；避免僵硬坚持，重视共同成长。",
        "火":"热烈主动但易急躁；放慢节奏与耐心沟通，情绪先稳后谈事。",
        "土":"重承诺但慢热；增强表达与柔软度，细腻回应对方需求。",
        "金":"清晰果断但偏硬；多赞美与接纳，避免过度批判与苛刻。",
        "水":"温和机智但易摇摆；设定节奏与边界，提升安全感与稳定性。"
    }[element]

def coordination_by(element: str):
    return {
        "木":"多接触绿色植物/林地与阅读学习；少辛辣油炸；用木质家具与东方气场。",
        "火":"多阳光/暖色/社交；少去阴寒环境与长夜熬灯；午时动、子时眠。",
        "土":"多亲近大地/园艺，稳定作息；少频繁搬动；居家以米黄土色稳场。",
        "金":"多做清理收纳与规则化；少拖延；金属器物/金白色调提气。",
        "水":"多亲水旅行与思考流动；少过劳；蓝黑色系与北方气场安神。"
    }[element]

def zodiac_brief(animal: str):
    # 生肖简评（保持中性、简洁）
    brief = {
        "马":"精力旺盛，果断热情，善言辞；弱点是偶有急躁，需学会冷静筹划。",
        "牛":"稳重踏实，耐力强；偶有固执，宜提升变通与沟通。",
        "虎":"胆识担当，行动力强；宜管住脾气，避免鲁莽。",
        "兔":"温润机敏，善人际；避免犹豫不决，提升决断。",
        "龙":"气场强、自信；需警惕好大喜功，脚踏实地。",
        "蛇":"理性内敛，观察入微；谨防多疑与过度谨慎。",
        "羊":"温和善良，重和谐；需加强边界感与坚定度。",
        "猴":"聪敏机变，创意足；避免浮躁分心，学会聚焦。",
        "鸡":"自律务实，目标感强；避免苛刻挑剔，多给赞赏。",
        "狗":"忠诚守义，责任心强；避免杞人忧天，提升信心。",
        "猪":"厚道包容，福缘较佳；避免懒散拖延，养成节律。",
        "鼠":"反应快，适应力强；注意节制与耐心，别太计较。"
    }
    return brief.get(animal, "")

def day_pillar_note(day_gz: str):
    # 日柱命理简评（示例覆盖常见日柱；未覆盖时给通用文案）
    table = {
        "甲寅":"【甲寅】坐禄通根，身旺。伤官生财主富进，但比肩多时需防争财；重原则，宜走长期积累。",
        "乙卯":"【乙卯】印旺生身，气质温润，有文采；忌优柔寡断，宜定目标稳推进。",
        "丙午":"【丙午】火势通明，表达力强、人缘广；忌急躁，先稳后快。",
        "丁巳":"【丁巳】火炼成金，审美与直觉好；忌情绪化，宜规律作息。",
        "戊辰":"【戊辰】厚土载物，抗压强；忌过稳保守，需有节奏地突破。",
        "己丑":"【己丑】湿土成田，勤恳务实；忌闷不吭声，宜学沟通表达。",
        "庚申":"【庚申】金白水清，果断利落；忌强硬，宜温和管理。",
        "辛酉":"【辛酉】清金琢器，规则意识强；忌挑剔，宜包容协作。",
        "壬子":"【壬子】水旺通流，聪敏善学；忌漂浮不定，宜定期复盘。",
        "癸亥":"【癸亥】润物无声，心思细腻；忌情绪内耗，宜身心同修。"
    }
    return table.get(day_gz, f"日柱：重视自我成长与边界，守正以达成，取长补短为要。")

def free_summary(birth_date: str, birth_time: str, gender: str):
    pillars, dt, year_animal = compute_pillars(birth_date, birth_time)

    # 五行统计（干+支共8份）
    cnt = count_elements_both(pillars)
    elements_text = ratio_text(cnt)

    # 日主 = 日干
    day_stem = pillars[2]["heavenly_stem"]
    day_branch = pillars[2]["earthly_branch"]
    day_gz = day_stem + day_branch
    day_master_element = STEM_ELEMENTS.get(day_stem, "木")

    # 强弱判断（免费概述）
    dominant = max(cnt, key=cnt.get)
    weakest = min(cnt, key=cnt.get)
    strong_val, weak_val = cnt[dominant], cnt[weakest]
    if strong_val >= 4:
        strength_level = "偏旺"
    elif strong_val >= 3 and strong_val - weak_val >= 2:
        strength_level = "中强"
    else:
        strength_level = "中平"

    strength_description = (
        f"五行分布：{elements_text}。主导元素为「{dominant}」（{strong_val}/8），"
        f"相对不足为「{weakest}」（{weak_val}/8）。整体为{strength_level}，"
        f"宜取{dominant}之泄/制，辅{weakest}以平衡五行。"
    )

    # 文案（全面但不过深）
    personality = personality_by(day_master_element)
    career_text = career_by(day_master_element)
    relation_text = relationships_by(day_master_element)
    coord_text = coordination_by(day_master_element)
    zodiac_text = zodiac_brief(year_animal)
    day_pillar_text = day_pillar_note(day_gz)

    # 幸运信息
    lucky_map = {
        "木": {"colors":["青绿","木青"], "directions":["东","东南"], "numbers":[3,8]},
        "火": {"colors":["朱红","绛紫"], "directions":["南"],       "numbers":[9]},
        "土": {"colors":["土黄","咖"],   "directions":["中","西南"], "numbers":[5]},
        "金": {"colors":["白金","银"],   "directions":["西","西北"], "numbers":[4,7]},
        "水": {"colors":["黛蓝","玄黑"], "directions":["北"],       "numbers":[1,6]},
    }
    lucky = lucky_map[day_master_element]

    # 结构（简述，不涉流年/择日）
    wood_sum, fire_sum = cnt["木"], cnt["火"]
    structure = "木火通明" if (wood_sum + fire_sum) >= 4 else "均衡格局"
    tips = "多用火土气场，利南方发展；减少阴寒与久坐熬夜。"

    # 命运简批（吸引用户升级，控制在概述层）
    fate_points = []
    # 依据强弱与元素给出几条普适提示
    if dominant == "木":
        fate_points += ["重原则与成长，适合长期主义；宜用内容/教育/健康等领域杠杆。"]
    if dominant == "火":
        fate_points += ["先稳后快，情绪管理优先；善用声量与人脉变现。"]
    if dominant == "土":
        fate_points += ["靠耐力与流程制胜；周期长但回报稳。"]
    if dominant == "金":
        fate_points += ["以专业与规则换价值；合适岗位可放大影响力。"]
    if dominant == "水":
        fate_points += ["信息差与跨界合作见长；警惕分心，建立节奏。"]
    # 再加两条通用建议
    fate_points += [
        "人际上宜广结良缘，但需识人用人，避免兄弟/朋友拖累财务。",
        "早年多迁动求学/求职辛劳，中后期重心宜聚焦在长期资产。"
    ]

    return {
        # 基本资料
        "solar_date": dt.strftime("%Y-%m-%d"),
        "birth_time": dt.strftime("%H:%M"),
        "gender": gender,

        # 四柱（干支/五行/纳音）
        "pillars": pillars,  # 每柱含：title, heavenly_stem, earthly_branch, element, stem_element, branch_element, nayin
        "year_animal": year_animal,

        # 五行分布与总结
        "elements_count_8": cnt,
        "elements_balance": elements_text,
        "day_master": day_stem,
        "day_master_element": day_master_element,
        "strength_level": strength_level,
        "strength_description": strength_description,

        # 解读（全面但不过深）
        "personality_traits": personality,
        "career_suggestions": career_text,
        "relationships_advice": relation_text,
        "coordination_advice": coord_text,
        "zodiac_brief": f"生肖：{year_animal}。{zodiac_text}" if year_animal else "",

        # 日柱命理（简评）
        "day_pillar_note": day_pillar_text,

        # 幸运信息
        "lucky_colors": "、".join(lucky["colors"]),
        "lucky_directions": "、".join(lucky["directions"]),
        "lucky_numbers": "、".join(map(str, lucky["numbers"])),

        # 结构与提示
        "structure": structure,
        "tips": tips,

        # 命运简批（概述；不涉具体年份/择日）
        "fate_points": fate_points
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
        out = free_summary(birth_date, birth_time, gender)
        return jsonify(out)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

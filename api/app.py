from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)

# ✅ 允许所有来源（开发阶段）或指定域名
CORS(app, resources={r"/*": {"origins": "*"}})

# 模拟八字排盘逻辑
def mock_bazi_calculator(birth_date, birth_time, gender):
    return {
        "structure": "木火通明",
        "day_master": "甲木",
        "useful_god": "火",
        "advice": "多用火土气场，利南方发展",
        "birth_date": birth_date,
        "birth_time": birth_time,
        "gender": gender
    }

@app.route("/")
def index():
    return "5XLiving Bazi API is running."

@app.route("/bazi", methods=["POST", "OPTIONS"])
def calculate_bazi():
    if request.method == "OPTIONS":
        # ✅ 手动处理预检请求（preflight）
        response = jsonify({})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
        return response

    try:
        data = request.get_json()
        birth_date = data.get("birth_date")
        birth_time = data.get("birth_time")
        gender = data.get("gender")

        if not (birth_date and birth_time and gender):
            return jsonify({"error": "Missing required fields"}), 400

        result = mock_bazi_calculator(birth_date, birth_time, gender)

        response = jsonify(result)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    except Exception as e:
        response = jsonify({"error": str(e)})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)

# ✅ 允许来自特定域名的跨域请求，包含OPTIONS预检支持
CORS(app, supports_credentials=True, resources={
    r"/*": {
        "origins": [
            "https://astro.5xliving.com"
        ],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

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
        # ✅ 预检请求直接返回200
        return '', 200

    try:
        data = request.get_json()
        birth_date = data.get("birth_date")
        birth_time = data.get("birth_time")
        gender = data.get("gender")

        if not (birth_date and birth_time and gender):
            return jsonify({"error": "Missing required fields"}), 400

        result = mock_bazi_calculator(birth_date, birth_time, gender)
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)

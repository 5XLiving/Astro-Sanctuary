from flask import Flask, request, jsonify

app = Flask(__name__)

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

@app.route("/bazi", methods=["POST"])
def calculate_bazi():
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
    app.run(debug=True)

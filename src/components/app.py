from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from joblib import load

app = Flask(__name__)

# Load model và scaler (ví dụ)
scaler = load('scaler.joblib')
model = load('model.joblib')

def process_landmarks(landmarks):
    # Example processing logic
    scaler = StandardScaler()
    scaled_landmarks = scaler.fit_transform(landmarks)
    return scaled_landmarks

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        landmarks = pd.DataFrame(data['landmarks'])
        
        # Thêm logic xử lý đặc trưng của bạn
        features = process_landmarks(landmarks) 
        
        # Dự đoán
        prediction = model.predict(features)
        return jsonify({'prediction': str(prediction[0])})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
if __name__ == '__main__':
    app.run(debug=True)
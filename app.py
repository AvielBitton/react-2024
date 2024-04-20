from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app,origins='*')


@app.route('/api/users', methods=['GET'])
def users():
    return jsonify({
        "users": [
    {"id": 1, "name": "Jon", "age": 80, "img": "https://images.unsplash.com/photo-1608876537010-ac56d8731614?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"},
    {"id": 2, "name": "Alice", "age": 30, "img": "https://images.unsplash.com/photo-1597071058713-6776461d7737?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwb2xlfGVufDB8fDB8fHww"},
    {"id": 3, "name": "Bob", "age": 28, "img": "https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVwb2xlfGVufDB8fDB8fHww"},
    {"id": 4, "name": "Charlie", "age": 27, "img": "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwb2xlfGVufDB8fDB8fHww"}
]
    })

if __name__ == '__main__':
    app.run(debug=True,port=8090)

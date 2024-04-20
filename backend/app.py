from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app,origins='*')


@app.route('/')
def hello():
    return f"Hello to colman !"

@app.route('/hi/<name>')
def welcome(name):
    return f"{name} Welcome to colman !"

if __name__ == '__main__':
    app.run(debug=True,port=8090)

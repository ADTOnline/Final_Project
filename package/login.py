import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# Function to create a SQLite connection
# Code Author: Chirag Dodia
def create_connection():
    conn = None
    try:
        conn = sqlite3.connect('users.db'f)
        return conn
    except Error as e: 
        print(e)
    return conn

# Function to create a new user
# Code Author: Chirag Dodia
def create_user(conn, username, password):
    cur = conn.cursor()
    hashed_password = generate_password_hash(password)
    cur.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_password))
    conn.commit()
    return cur.lastrowid

# Function to retrieve user information by username
# Code Author: Chirag Dodia
def get_user_by_username(conn, username):
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE username=?", (username,))
    rows = cur.fetchall()
    if len(rows) == 0:
        return None
    else:
        return {'username': rows[0][1], 'password': rows[0][2]}

# Database initialization
# Code Author: Chirag Dodia
def initialize_database():
    conn = create_connection()
    with conn:
        cur = conn.cursor()
        cur.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)")
        # Dummy user creation (remove in production)
        create_user(conn, 'john_doe', 'password123')

initialize_database()

# Login route
# Code Author: Chirag Dodia
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    user = get_user_by_username(create_connection(), username)
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'error': 'Invalid username or password'}), 401

    return jsonify({'message': 'Login successful', 'user': user}), 200

if __name__ == '__main__':
    app.run(debug=True)

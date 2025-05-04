from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_restful import Api, Resource
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'  # SQLite database
db = SQLAlchemy(app)

# Define database models
#Code Author: Chirag
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)


#Code Author: Ayan
class Doctor(db.Model):
    doc_id = db.Column(db.Integer, primary_key=True)
    doc_name = db.Column(db.String(100), nullable=False)
    doc_specialization = db.Column(db.String(100), nullable=False)
    doc_exp = db.Column(db.Integer, nullable=False)
    doc_ph_no = db.Column(db.String(15), nullable=False)
    doc_address = db.Column(db.String(200), nullable=False)

class Patient(db.Model):
    pat_id = db.Column(db.Integer, primary_key=True)
    pat_name = db.Column(db.String(100), nullable=False)
    pat_age = db.Column(db.Integer, nullable=False)
    pat_gender = db.Column(db.String(10), nullable=False)
    pat_contact = db.Column(db.String(15), nullable=False)
    pat_address = db.Column(db.String(200), nullable=False)

# API routes and logic
# Include your route definitions here

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)



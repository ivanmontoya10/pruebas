from flask import Flask
from api.extensions import db
from api.controllers import User, Users
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
# db = SQLAlchemy(app)
db.init_app(app)
api = Api(app)

with app.app_context():
    db.create_all()
    
api.add_resource(Users, "/api/users/")
api.add_resource(User, "/api/users/<int:user_id>")

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True)
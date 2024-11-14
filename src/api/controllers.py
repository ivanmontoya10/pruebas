from flask import Flask, Response
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from api.models import UserModel, db
import json
import re

user_args= reqparse.RequestParser()
user_args.add_argument("username", type=str, required=True, help="Username is required")
user_args.add_argument("email", type=str, required=True, help="Email is required")

userField={
    'id': fields.Integer,
    'username': fields.String,
    'email': fields.String
}

class Users(Resource):
    @marshal_with(userField)
    def post(self):
        args = user_args.parse_args()
        if not args['username'] or args['username'].isspace():
            response = Response(json.dumps({'error': 'Username cannot be empty'}),
            status= 400,
            mimetype='application/json')
            return abort(response)
        if not args['email'] or args['email'].isspace():
            response = Response(json.dumps({'error': 'Email cannot be empty'}),
            status= 400,
            mimetype='application/json')
            return abort(response)
        email= args['email'].strip()
        if not re.match(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",email):
            response = Response(json.dumps({'error': 'Invalid email format'}),
            status= 400,
            mimetype='application/json')
            return abort(response)
        
        user = UserModel(username=args['username'], email=args['email'])
        db.session.add(user)
        db.session.commit()
        users= UserModel.query.all()
        return users, 201
    
    @marshal_with(userField)
    def get(self):
        # result = UserModel.query.filter_by(id=user_id).first()
        # if not result:
        #     abort(404, message="User not found")
        users= UserModel.query.all()
        return users

    # @marshal_with(userField)
    # def put(self, user_id):
    #     args = user_args.parse_args()
    #     result = UserModel.query.filter_by(id=user_id).first()
    #     if not result:
    #         abort(404, message="User not found")
    #     result.username = args['username']
    #     result.email = args['email']
    #     db.session.commit()
    #     return result

    # def delete(self, user_id):
    #     result = UserModel.query.filter_by(id=user_id).first()
    #     if not result:
    #         abort(404, message="User not found")
    #     db.session.delete(result)
    #     db.session.commit()
    #     return '', 204
    
class User(Resource):
    @marshal_with(userField)
    def get(self, user_id):
        user = UserModel.query.filter_by(id=user_id).first()
        if not user:
            abort(404, message="User not found")
        return user, 200

    @marshal_with(userField)
    def patch(self, user_id):
        args = user_args.parse_args()
        user = UserModel.query.filter_by(id=user_id).first()
        if not user:
            abort(404, message="User not found")
        user.username = args['username']
        user.email = args['email']
        db.session.commit()
        return user, 200
    
    def delete(self, user_id):
        user = UserModel.query.filter_by(id=user_id).first()
        if not user:
            abort(404, message="User not found")
        db.session.delete(user)
        db.session.commit()
        users= UserModel.query.all()
        return users
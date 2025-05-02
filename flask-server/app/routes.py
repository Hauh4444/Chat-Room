from flask import Blueprint, jsonify, request

from uuid import uuid4

from .data_mappers import DataMappers


# Blueprint for API routes
bp = Blueprint("api_bp", __name__, url_prefix="/api")


# GET /api/test/
@bp.route("/test/", methods=["GET"])
def test():
    return jsonify("Success"), 200


# GET /api/user/
@bp.route("/user/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = DataMappers.get_user(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify({"message": "User found", "user": user}), 200


# POST /api/user/
@bp.route("/user/", methods=["POST"])
def post_user():
    data = request.json
    token = str(uuid4())
    user_id = DataMappers.post_user(data.get("name"), token)
    if not user_id:
        return jsonify({"error": "Error creating user"}), 409
    return jsonify({"message": "User successfully created", "user_id": user_id}), 200


# GET /api/messages/
@bp.route("/messages/", methods=["GET"])
def get_messages():
    messages = DataMappers.get_messages()
    if not messages:
        return jsonify({"error": "Messages not found"}), 404
    return jsonify({"message": "Messages found", "messages": messages}), 200


# POST /api/messages/
@bp.route("/messages/", methods=["POST"])
def post_message():
    data = request.json
    message_id = DataMappers.post_message(data.get("user_token"), data.get("message"))
    if not message_id:
        return jsonify({"error": "Error creating message"}), 409
    return jsonify({"message": "Message successfully created", "message_id": message_id}), 200
from flask import Blueprint, jsonify


# Blueprint for API routes
bp = Blueprint("bp", __name__, url_prefix="/api")


# GET /api/test/
@bp.route("/test/", methods=["GET"])
def test():
    return jsonify("Success"), 200
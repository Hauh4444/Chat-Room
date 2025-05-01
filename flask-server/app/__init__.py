from flask import Flask
from flask_cors import CORS

from dotenv import load_dotenv

from .routes import bp

import os


def create_app():
    load_dotenv()

    app = Flask(__name__)

    CORS(app, supports_credentials=True, resources={r"/api/*": {"origins": os.getenv("FRONTEND_URL")}})

    app.register_blueprint(bp)

    return app

from .db import get_db

from .entities import User, Message


class DataMappers:
    @staticmethod
    def get_user(user_id):
        db = get_db()
        cursor = db.cursor()
        statement = "SELECT * FROM users WHERE user_id = ?"
        cursor.execute(statement, (user_id,))
        user = cursor.fetchone()
        return User(*user).to_dict() if user else None

    @staticmethod
    def post_user(name, token):
        db = get_db()
        cursor = db.cursor()
        statement = "INSERT INTO users (name, token) VALUES (?, ?)"
        cursor.execute(statement, (name, token))
        db.commit()
        return cursor.lastrowid

    @staticmethod
    def get_messages():
        db = get_db()
        cursor = db.cursor()
        statement = "SELECT * FROM messages ORDER BY message_id DESC LIMIT 50"
        cursor.execute(statement)
        messages = cursor.fetchall()
        return [Message(*message).to_dict() for message in messages] if messages else None

    @staticmethod
    def post_message(user_token, message):
        db = get_db()
        cursor = db.cursor()
        statement = "INSERT INTO messages (user_token, message) VALUES (?, ?)"
        cursor.execute(statement, (user_token, message))
        print(user_token)
        print(message)
        db.commit()
        return cursor.lastrowid
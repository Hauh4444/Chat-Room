class User:
    def __init__(self, user_id, name, token):
        self.user_id = user_id
        self.name = name
        self.token = token

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "name": self.name,
            "token": self.token
        }


class Message:
    def __init__(self, message_id, user_token, message):
        self.message_id = message_id
        self.user_token = user_token
        self.message = message

    def to_dict(self):
        return {
            "message_id": self.message_id,
            "user_token": self.user_token,
            "message": self.message
        }
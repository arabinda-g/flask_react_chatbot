from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class ChatSession(db.Model):
    __tablename__ = 'chat_sessions'

    token = db.Column(db.String(36), primary_key=True)

class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(36), db.ForeignKey('chat_sessions.token'))
    prompt = db.Column(db.Text)
    response = db.Column(db.Text)

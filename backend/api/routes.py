from flask import Blueprint, request, jsonify
from .models import db, ChatSession, Message
import uuid

api = Blueprint('api', __name__)

@api.route('/create_token', methods=['POST'])
def create_token():
    token = str(uuid.uuid4())
    new_session = ChatSession(token=token)
    db.session.add(new_session)
    db.session.commit()
    return jsonify({'token': token})

@api.route('/get_history/<token>', methods=['GET'])
def get_history(token):
    history = Message.query.filter_by(token=token).all()
    history = [{'prompt': h.prompt, 'response': h.response} for h in history]
    return jsonify({'history': history})

@api.route('/chat', methods=['POST'])
def chat():
    data = request.json
    token = data['token']
    prompt = data['prompt']
    response_text = ChatBot.get_response(prompt)
    new_message = Message(token=token, prompt=prompt, response=response_text)
    db.session.add(new_message)
    db.session.commit()
    return jsonify({'response': response_text})

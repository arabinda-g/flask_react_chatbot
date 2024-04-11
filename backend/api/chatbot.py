from openai import OpenAI
import random
from .config import Config

class ChatBot:
    # Common responses
    responses = [
        "Hello! How can I help you today?",
        "I'm here to help! What can I do for you?",
        "How can I help you today?",
        "I'm sorry, I don't understand. Can you please rephrase that?",
        "I'm not sure what you're asking. Can you please provide more information?",
        "I'm sorry, I don't have that information. Is there something else I can help with?",
        "I'm sorry, I'm not able to provide that information. Is there something else I can help with?",
    ]

    @staticmethod
    def get_response(prompt):
        # Return a random response
        return random.choice(ChatBot.responses)
    
        client = OpenAI(
            api_key=Config.OPENAI_API_KEY,
        )

        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            model="gpt-3.5-turbo",
        )

        return chat_completion.choices[0].message.content

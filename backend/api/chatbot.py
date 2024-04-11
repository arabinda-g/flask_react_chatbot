from openai import OpenAI
from .config import Config

class ChatBot:
    @staticmethod
    def get_response(prompt):
        # Return a sample response
        return "Hello! How can I help you today?"
    
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

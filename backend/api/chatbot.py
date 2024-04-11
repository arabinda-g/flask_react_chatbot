import openai
from .config import Config

class ChatBot:
    @staticmethod
    def get_response(prompt):
        openai.api_key = Config.OPENAI_API_KEY
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=150
        )
        return response.choices[0].text.strip()

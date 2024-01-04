```python
import openai
import os

# Load your OpenAI API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")

class OpenAI_API:
    def __init__(self):
        self.engine = "davinci-codex"

    def generate_response(self, prompt, max_tokens=100):
        """
        Generate a response from the OpenAI API given a prompt.
        """
        response = openai.Completion.create(
            engine=self.engine,
            prompt=prompt,
            max_tokens=max_tokens
        )
        return response.choices[0].text.strip()

    def translate_text(self, text, target_language):
        """
        Translate the given text to the target language.
        """
        prompt = f"{text} \\nTranslate the above text to {target_language}."
        return self.generate_response(prompt)

    def get_travel_recommendations(self, user_preferences, location):
        """
        Generate travel recommendations based on user preferences and location.
        """
        prompt = f"I am a traveler with the following preferences: {user_preferences}. I am currently in {location}. What should I do?"
        return self.generate_response(prompt)

    def get_cultural_information(self, location):
        """
        Get cultural information and tips about the given location.
        """
        prompt = f"Tell me about the culture and customs in {location}."
        return self.generate_response(prompt)
```

import pathlib
import textwrap
import subprocess
import sys


# Function to install a package
def install_package(package_name):
    try:
        __import__(package_name)  # Try importing the package
    except ImportError:
        print(f"'{package_name}' not found. Installing...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", package_name])


# Ensure google-generativeai is installed
install_package("google-generativeai")
import google.generativeai as genai
import json
from http.server import BaseHTTPRequestHandler, HTTPServer

# Configuration de l'API Google Gemini
GOOGLE_API_KEY = (
    "AIzaSyBTDqTe_WS8QubMVxkGAFbB6Wi9PIU82M0"  # Remplacez par votre clé API
)
genai.configure(api_key=GOOGLE_API_KEY)


# Fonction pour formater le texte en Markdown
def to_markdown(text):
    text = text.replace("•", "  *")
    return "> " + textwrap.indent(text, "> ", predicate=lambda _: True)


# Initialiser le modèle Gemini
model = genai.GenerativeModel("gemini-1.5-flash")


class MyRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            # Servir le fichier HTML
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            with open("front_chatbot.html", "rb") as f:
                self.wfile.write(f.read())
        else:
            self.send_response(404)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(b"404 Not Found")

    def do_POST(self):
        if self.path == "/chat":
            content_length = int(self.headers["Content-Length"])
            post_data = self.rfile.read(content_length)

            # Décoder les données JSON envoyées par le frontend
            message = json.loads(post_data.decode())["message"]

            # Appel à l'API Gemini pour générer une réponse
            try:
                response = model.generate_content(message)
                generated_text = response.text

                # Renvoi de la réponse au frontend
                response_data = {"response": to_markdown(generated_text)}
                self.send_response(200)
                self.send_header("Content-type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps(response_data).encode())
            except Exception as e:
                # Gestion des erreurs
                error_message = f"Erreur lors de l'appel à l'API : {str(e)}"
                self.send_response(500)
                self.send_header("Content-type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": error_message}).encode())


def start_chat_serve(
    server_class=HTTPServer, handler_class=MyRequestHandler, port=8080
):
    server_address = ("", port)  # Change port if needed
    httpd = HTTPServer(server_address, MyRequestHandler)
    print("Chat server started on port 8080...")
    httpd.serve_forever()


if __name__ == "__main__":
    start_chat_serve()

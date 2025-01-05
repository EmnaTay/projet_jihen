from django.apps import AppConfig
import threading
from .server import start_chat_server


class LibraryConfig(AppConfig):
    name = "library"


class ChatConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "chat"

    def ready(self):
        # Start the chat server in a separate thread
        threading.Thread(target=start_chat_server, daemon=True).start()

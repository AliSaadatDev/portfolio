from django.urls import path
from .views import terminal_execute

urlpatterns = [
    path("execute/", terminal_execute),
]
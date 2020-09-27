# todos/urls.py
from django.urls import path

from .views import StuffViewSet

urlpatterns = [
    path('', StuffViewSet.as_view()),
]
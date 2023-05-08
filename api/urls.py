from . import views
from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('insert/', views.insert),
    path('get/', views.get)
]

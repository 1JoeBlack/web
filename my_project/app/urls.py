from django.urls import path
from app import views

urlpatterns = [
    path('contact/', views.index, name='contact'),
    path('thanks/', views.thanks, name='thanks'),
    path('deep/', views.deep, name='deep'),
    path('', views.home, name='home'),
]
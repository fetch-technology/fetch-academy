from django.urls import path, include
from . import views

urlpatterns = [
    path('api/v1/signup', views.CreateUserView.as_view(), name='create_user'),
]
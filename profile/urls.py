from django.urls import path, include
from . import views

urlpatterns = [
    path('api/v1/login', views.CreateUserView.as_view(), name='login'),
    path('api/v1/logout', views.logout, name='logout'),
    path('api/v1/profile/<int:user>', views.ProfileRetrieveAPIView.as_view()),
]
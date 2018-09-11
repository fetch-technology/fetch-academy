from django.urls import path, include
from . import views

urlpatterns = [
    path('api/v1/signup', views.CreateUserView.as_view(), name='create_user'),
    path('api/v1/profiles/update/<int:pk>', views.UpdateProfile.as_view()),
    path('api/v1/profiles/<int:id>', views.DetailProfileView.as_view()),
]
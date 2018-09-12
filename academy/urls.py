from django.urls import path
from . import views


urlpatterns = [
    path('api/v1/lessons/<int:pk>/<int:program>', views.UserLessonAPIView.as_view(), name='user_lessons'),
    
]
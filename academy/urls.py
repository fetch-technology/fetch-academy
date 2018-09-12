from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter(trailing_slash=False)
router.register('user_courses', views.UserCourseViewset, base_name='user_courses')


urlpatterns = [
    path('api/v1/lessons/<int:pk>/<int:program>', views.UserLessonAPIView.as_view(), name='user_lessons'),
    path('api/v1/', include(router.urls)),
]
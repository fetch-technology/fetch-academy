from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter(trailing_slash=False)
router.register('courses', views.CourseViewset, base_name='courses')
router.register('user-courses', views.UserCourseViewset, base_name='user-courses')

urlpatterns = [
    path('api/v1/programs/<int:program>/lessons', views.UserLessonAPIView.as_view(), name='user_lessons'),
    path('api/v1/lessons/<int:pk>', views.DetailLessonAPIView.as_view(), name='detail_lesson'),
    path('api/v1/', include(router.urls)),
]
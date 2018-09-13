from django.urls import path, include
from django.conf.urls import url
from . import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter(trailing_slash=True)
router.register('courses', views.CourseViewset, base_name='courses')
router.register('user_courses/(?P<user>[^/.]+)', views.UserCourseAPIView, base_name='user-courses')

urlpatterns = [
    path('api/v1/lessons/<int:pk>/<int:program>', views.UserLessonAPIView.as_view(), name='user_lessons'),
    url('api/v1/', include(router.urls)),
]
from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from . import models


class UserLessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserLesson
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        exclude = ['password'] 

        
class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Course
        fields = '__all__'  


class UserCourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Participation
        fields = '__all__'
        depth = 2

  
class DetailUserLessonsSerializers(serializers.ModelSerializer):
    user_lessons = UserLessonSerializer(many=True)
    class Meta:
        model = models.Lesson
        fields = ['id', 'created', 'modified', 'files', 'videos', 'title', 'content', 'program', 'user_lessons']

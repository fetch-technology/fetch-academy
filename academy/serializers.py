from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from . import models


class UserLessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserLesson
        fields = ['status']


class DetailUserLessonsSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Lesson
        fields = ['id', 'created', 'modified', 'files', 'videos', 'title', 'content', 'program',]

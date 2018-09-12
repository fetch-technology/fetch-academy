from rest_framework import serializers
from django.utils.duration import _get_duration_components
from . import models


class UserLessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserLesson
        fields = '__all__'




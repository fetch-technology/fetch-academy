from django.shortcuts import render
from rest_framework import generics
from . import serializers
from . import models


class UserLessonAPIView(generics.ListAPIView):
    serializer_class = serializers.UserLessonSerializer

    def get_queryset(self):
        print(self.kwargs)
        return models.UserLesson.objects.filter(student=self.kwargs['pk'])

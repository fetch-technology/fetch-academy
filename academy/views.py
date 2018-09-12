from django.shortcuts import render
from rest_framework import generics
from . import serializers
from . import models

class UserLessonAPIView(generics.ListAPIView):
    serializer_class = serializers.DetailUserLessonsSerializers

    def get_queryset(self):
        user = models.User.objects.get(pk=self.kwargs['pk'])
        return user.lesson_set.filter(program=self.kwargs['program'])

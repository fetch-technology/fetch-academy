from django.shortcuts import render
from rest_framework import generics, viewsets
from django.db.models import Prefetch
from . import serializers
from . import models
from django.contrib.auth.models import User
 

class UserLessonAPIView(generics.ListAPIView):
    serializer_class = serializers.UserLessonSerializer

    def get_queryset(self):
        print(self.kwargs)
        return models.UserLesson.objects.filter(student=self.kwargs['pk'])


class UserCourseViewset(viewsets.ModelViewSet):
    serializer_class = serializers.UserCourseSerializer

    def get_queryset(self):
        user = self.request.user
        return models.Participation.objects.prefetch_related('course', 'course__mentor').filter(user_id=user)
      

class UserViewset(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()


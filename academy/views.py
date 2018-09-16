from django.shortcuts import render
from rest_framework import generics, viewsets, mixins
from django.db.models import Prefetch
from . import serializers
from . import models
from django.contrib.auth import get_user_model


class UserLessonAPIView(generics.ListAPIView):
    serializer_class = serializers.DetailUserLessonsSerializers

    def get_queryset(self):
        user = self.request.user
        return user.lesson_set.filter(program=self.kwargs['program']).order_by('pk')


class DetailLessonAPIView(generics.RetrieveAPIView):
    serializer_class = serializers.DetailUserLessonsSerializers
    queryset = models.Lesson.objects.all()


class UserCourseViewset(viewsets.ModelViewSet):
    serializer_class = serializers.UserCourseSerializer

    def get_queryset(self):
        return self.request.user.courses


class CourseViewset(viewsets.ModelViewSet):
    serializer_class = serializers.CourseSerializer
    queryset = models.Course.objects.all()


class UserViewset(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = get_user_model().objects.all()

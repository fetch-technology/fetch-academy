from django.shortcuts import render
from django.contrib.auth import models
from rest_framework import generics
from . import serializers

class CreateUserView(generics.CreateAPIView):
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()

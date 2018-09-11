from django.shortcuts import render
from django.contrib.auth import models
from rest_framework import generics
from . import serializers, models

class CreateUserView(generics.CreateAPIView):
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()


class DetailProfileView(generics.ListAPIView):
    serializer_class = serializers.ProfileSerializer
    
    def get_queryset(self):
        user = self.kwargs['user']  
        return models.Profile.objects.filter(user_id=user)


class UpdateProfile(generics.UpdateAPIView):
    serializer_class = serializers.ProfileSerializer
    queryset = models.Profile.objects.all()


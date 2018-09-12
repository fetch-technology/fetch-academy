from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import get_user_model
from . import serializers, models


class CreateUserView(generics.CreateAPIView):
    serializer_class = serializers.UserSerializer
    queryset = get_user_model().objects.all()


class ProfileRetrieveAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = serializers.ProfileSerializer
    lookup_field = 'user'
    queryset = models.Profile.objects.all()



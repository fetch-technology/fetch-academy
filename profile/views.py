from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import get_user_model, logout as base_logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import serializers, models


class CreateUserView(generics.CreateAPIView):
    serializer_class = serializers.UserSerializer
    queryset = get_user_model().objects.all()


class ProfileRetrieveAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = serializers.ProfileSerializer
    lookup_field = 'user'
    queryset = models.Profile.objects.all()

@api_view(['GET'])
def logout(request):
    base_logout(request)
    return Response({"message": "Hello, world!"})

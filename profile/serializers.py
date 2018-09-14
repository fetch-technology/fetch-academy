from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth import get_user_model
from . import models


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = '__all__'
    
    def create(self, validated_data):
        User = get_user_model()
        try:
            self.instance = User.objects.get(username=validated_data['username'])
            return self.instance
        except User.DoesNotExist:
            return super().create(validated_data)

    def is_valid(self, raise_exception=False):
        self._validated_data = self.initial_data
        self._errors = {}
        return True



class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = '__all__'
from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth import get_user_model, login
import requests
from . import models


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = '__all__'
    
    def create(self, validated_data):
        User = get_user_model()
        userinfo = requests.get('https://www.googleapis.com/oauth2/v3/userinfo', headers={
            'Authorization': 'Bearer {access_token}'.format(**validated_data)
        }).json()

        try:
            self.instance = User.objects.get(email=userinfo['email'])
        except User.DoesNotExist:
            self.instance = User.objects.create_user(
                userinfo['email'], 
                email=userinfo['email'],
                first_name=userinfo['given_name'],
                last_name=userinfo['family_name']
            )

        login(self.context.get('request'), self.instance)
        return self.instance


    def is_valid(self, raise_exception=False):
        self._validated_data = self.initial_data
        self._errors = {}
        return True


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = '__all__'
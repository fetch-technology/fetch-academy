from django.db import models
from django.contrib.auth.models import User
from fetch_academy.models import BaseModel
from django.utils.translation import ugettext_lazy as _


class Team(BaseModel):
    name = models.CharField(max_length=150)

    def __str__(self):
         self.name

class Profile(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    link_fb = models.URLField(max_length=250, blank=True, null=True)
    link_gg = models.URLField(max_length=250, blank=True, null=True)
    link_github = models.URLField(max_length=250, blank=True, null=True)
    link_skype = models.URLField(max_length=250, blank=True, null=True)
    phone_number = models.CharField( max_length=13, blank=True, null=True)
    gender = models.CharField(_('gender'), max_length=10,  blank=True, null=True)
    date_of_birth = models.DateTimeField(_('Date of birth'), blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)

    def __str__(self):
        self.phone_number

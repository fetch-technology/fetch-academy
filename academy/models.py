from django.db import models
from fetch_academy.models import BaseModel
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _


class Program(BaseModel):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Course(BaseModel):
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    describe = models.TextField(_('Describe'))
    title = models.CharField(_('Title'), max_length=250)
    user = models.ManyToManyField(User, through="Participant")

    def __str__(self):
        return self.title


class Participant(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    begin = models.DateTimeField(_('Begin'), auto_now=True)
    end = models.DateTimeField(_('End'), blank=True, null=True)


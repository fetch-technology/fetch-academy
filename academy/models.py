from django.db import models
from fetch_academy.models import BaseModel
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.contrib.postgres.fields import ArrayField


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


class Lesson(BaseModel):
    title = models.CharField(_('Title'), max_length=250)
    files = ArrayField(      
                models.URLField(max_length=200),
                size=10,
        )
    videos = ArrayField(      
                models.URLField(max_length=200),
                size=10,
        )
    title = models.CharField(_('Title'), max_length=250)
    content = models.TextField(_('Content'))
    program = models.ForeignKey( Program, related_name="lessons", on_delete=models.CASCADE)


class User_lesson(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Course, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
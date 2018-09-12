from django.db import models
from fetch_academy.models import BaseModel
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.contrib.postgres.fields import ArrayField


class Program(BaseModel):
    name = models.CharField(max_length=250)
    describe = models.TextField(_('Describe'), blank=True, null=True)
    requirement = models.TextField(_('Requirement'), blank=True, null=True)
    goal = models.TextField(_('Goal'))
    
    def __str__(self):
        return self.name


class Course(BaseModel):
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    mentor = models.ForeignKey(User, related_name="courses", on_delete=models.CASCADE)
    title = models.CharField(_('Title'), max_length=250)
    students = models.ManyToManyField(User, through="Participation")
    begin = models.DateTimeField(_('Begin'), auto_now=True)
    end = models.DateTimeField(_('End'), blank=True, null=True)

    def __str__(self):
        return self.title


class Participation(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name="participants", on_delete=models.CASCADE)
    begin = models.DateTimeField(_('Begin'), auto_now=True)
    end = models.DateTimeField(_('End'), blank=True, null=True)


class Lesson(BaseModel):
    title = models.CharField(_('Title'), max_length=250)
    files = ArrayField(      
                models.URLField(max_length=200),
                size=10, null=True
        )
    videos = ArrayField(      
                models.URLField(max_length=200),
                size=10, null=True
        )
    title = models.CharField(_('Title'), max_length=250)
    content = models.TextField(_('Content'))
    program = models.ForeignKey( Program, related_name="lessons", on_delete=models.CASCADE)
    students = models.ManyToManyField(User, through="UserLesson")
    def __str__(self):
        return self.title


class UserLesson(BaseModel):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
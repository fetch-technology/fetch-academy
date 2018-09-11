from django.contrib import admin
from . import models

admin.site.register(models.Program)
admin.site.register(models.Course)
admin.site.register(models.Participant)
admin.site.register(models.Lesson)
admin.site.register(models.UserLesson)
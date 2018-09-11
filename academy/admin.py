from django.contrib import admin
from . import models

admin.site.register(models.Course)
admin.site.register(models.Participant)


class UserLessonInline(admin.TabularInline):
    model = models.UserLesson  


class LessonInline(admin.TabularInline):
    model = models.Lesson


@admin.register(models.Lesson)
class LessonAdmin(admin.ModelAdmin):
    inlines = [
        UserLessonInline
    ]


@admin.register(models.Program)
class ProgramAdmin(admin.ModelAdmin):
    inlines = [
        LessonInline,
    ]

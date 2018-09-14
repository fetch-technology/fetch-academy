from django.contrib import admin
from . import models


class ParticipationInline(admin.TabularInline):
    model = models.Participation
    extra = 1

class CourseAdmin(admin.ModelAdmin):
    inlines = (ParticipationInline,)

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

admin.site.register(models.Course, CourseAdmin)
admin.site.register(models.Participation)
admin.site.register(models.UserLesson)
admin.site.register(models.CourseLesson)

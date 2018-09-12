from django.contrib import admin
from . import models


class ParticipationInline(admin.TabularInline):
    model = models.Participation
    extra = 1

class CourseAdmin(admin.ModelAdmin):
    inlines = (ParticipationInline,)

    
admin.site.register(models.Program)
admin.site.register(models.Course, CourseAdmin)
admin.site.register(models.Participation)
admin.site.register(models.Lesson)
admin.site.register(models.UserLesson)
from django.contrib import admin
from . import models
# Register your models here.


class ProfileInline(admin.TabularInline):
    model = models.Profile


@admin.register(models.Team)
class TeamAdmin(admin.ModelAdmin):
    inlines = [
        ProfileInline,
    ]

admin.site.register(models.Profile)
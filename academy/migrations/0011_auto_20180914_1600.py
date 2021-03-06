# Generated by Django 2.1.1 on 2018-09-14 09:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('academy', '0010_merge_20180914_0947'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='lessons',
            field=models.ManyToManyField(through='academy.CourseLesson', to='academy.Lesson'),
        ),
        migrations.AlterField(
            model_name='course',
            name='mentor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teaching_courses', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='course',
            name='students',
            field=models.ManyToManyField(related_name='courses', through='academy.Participation', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='courselesson',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course_lessons', to='academy.Course'),
        ),
    ]

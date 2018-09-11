# Generated by Django 2.1.1 on 2018-09-11 10:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('academy', '0002_lesson_user_lesson'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User_lesson',
            new_name='UserLesson',
        ),
        migrations.RenameField(
            model_name='course',
            old_name='user',
            new_name='students',
        ),
        migrations.RenameField(
            model_name='userlesson',
            old_name='user',
            new_name='student',
        ),
        migrations.RemoveField(
            model_name='course',
            name='describe',
        ),
        migrations.AddField(
            model_name='course',
            name='begin',
            field=models.DateTimeField(auto_now=True, verbose_name='Begin'),
        ),
        migrations.AddField(
            model_name='course',
            name='end',
            field=models.DateTimeField(blank=True, null=True, verbose_name='End'),
        ),
        migrations.AddField(
            model_name='course',
            name='mentor',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='courses', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lesson',
            name='students',
            field=models.ManyToManyField(through='academy.UserLesson', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='program',
            name='describe',
            field=models.TextField(blank=True, null=True, verbose_name='Describe'),
        ),
        migrations.AddField(
            model_name='program',
            name='goal',
            field=models.TextField(default='', verbose_name='Content'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='program',
            name='requirement',
            field=models.TextField(blank=True, null=True, verbose_name='Content'),
        ),
        migrations.AlterField(
            model_name='participant',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='participants', to='academy.Course'),
        ),
        migrations.AlterField(
            model_name='userlesson',
            name='lesson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='academy.Lesson'),
        ),
    ]

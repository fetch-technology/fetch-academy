from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from django.db.models import Count
from . import models


class UserProfileSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    
    class Meta:
        model = models.User
        fields = ['last_name', 'first_name', 'email', 'full_name', 'id']

    def get_full_name(self, model):
        return model.get_full_name()


class UserLessonSerializer(serializers.ModelSerializer):
    student = UserProfileSerializer()
    class Meta:
        model = models.UserLesson
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        exclude = ['password']


class LessonSerializer(serializers.ModelSerializer):
    user_lessons = serializers.SerializerMethodField()

    class Meta:
        model = models.Lesson
        fields = '__all__'

    def get_user_lessons(self, model):
        user_lessons = model.user_lessons.filter(student=self.context['request'].user)
        serializer = UserLessonSerializer(user_lessons, many=True)
        return serializer.data


class ProgramSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True)

    class Meta:
        model = models.Program
        fields = ['name', 'describe', 'requirement', 'goal', 'id', 'lessons']


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = '__all__'


class UserCourseSerializer(serializers.ModelSerializer):
    program = ProgramSerializer()

    class Meta:
        model = models.Course
        fields = '__all__'
        depth = 4


# class UserCourseSerializer(serializers.ModelSerializer):
#     user = UserProfileSerializer(read_only=True)
#     program = ProgramSerializer(read_only=True)
#     students = UserProfileSerializer(read_only=True, many=True)
#     mentor = UserProfileSerializer(read_only=True)
#     student_count = serializers.SerializerMethodField()
#     opened_lesson_count = serializers.SerializerMethodField()
#     lesson_count = serializers.SerializerMethodField()

#     class Meta:
#         model = models.Course
#         exclude = ['is_removed', 'created', 'modified']
#         depth = 2

#     def get_student_count(self, model):
#         return model.students.count()

#     def get_opened_lesson_count(self, model):
#         return model.opened_lessons.count()

#     def get_lesson_count(self, model):
#         return model.program.lessons.count()


class DetailUserLessonsSerializers(serializers.ModelSerializer):
    user_lessons = UserLessonSerializer(many=True)

    class Meta:
        model = models.Lesson
        fields = ['id', 'created', 'modified', 'files', 'videos',
                  'title', 'content', 'program', 'user_lessons']

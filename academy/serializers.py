from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from django.db.models import Count
from . import models
from profile import models as profile_models


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        exclude = ['password']


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = profile_models.Profile
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    profile = ProfileSerializer()
    
    class Meta:
        model = models.User
        fields = ['last_name', 'first_name', 'email', 'full_name', 'id', 'profile']

    def get_full_name(self, model):
        return model.get_full_name()


class DetailLessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Lesson
        fields = '__all__'


class UserLessonSerializer(serializers.ModelSerializer):
    lesson = DetailLessonSerializer()

    class Meta:
        model = models.UserLesson
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    user_lessons = serializers.SerializerMethodField()

    class Meta:
        model = models.Lesson
        fields = ['user_lessons']

    def get_user_lessons(self, model):
        user_lessons = model.user_lessons.filter(student=self.context['request'].user)
        serializer = UserLessonSerializer( model.user_lessons, many=True)
        return serializer.data


class ProgramSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Program
        fields = ['name', 'describe', 'requirement', 'goal', 'id']


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = '__all__'


class UserCourseSerializer(serializers.ModelSerializer):
    program = ProgramSerializer(read_only=True)
    user = UserProfileSerializer(read_only=True)
    mentor = UserProfileSerializer(read_only=True)
    students = UserProfileSerializer(read_only=True, many=True)
    student_count = serializers.SerializerMethodField()
    lessons = serializers.SerializerMethodField()
    lesson_count = serializers.SerializerMethodField() 
    opened_lesson_count = serializers.SerializerMethodField() 

    class Meta:
        model = models.Course
        exclude = ['is_removed', 'created', 'modified']
        depth = 2

    def get_student_count(self, model):
         return model.students.count()
    
    def get_lesson_count(self, model):
         return model.program.lessons.count()

    def get_opened_lesson_count(self, model):
        user_lessons = models.UserLesson.objects.filter(lesson__in=model.program.lessons.all(), is_open=True).count()
        print(user_lessons)
        return user_lessons
    
    def get_lessons(self, model):
        lessons = model.program.lessons.all()
        serializer = LessonSerializer(lessons, many=True, context={'request': self.context['request']})
        return serializer.data


class DetailUserLessonsSerializers(serializers.ModelSerializer):
    user_lessons = UserLessonSerializer(many=True)

    class Meta:
        model = models.Lesson
        fields = ['id', 'created', 'modified', 'files', 'videos',
                  'title', 'content', 'program', 'user_lessons']

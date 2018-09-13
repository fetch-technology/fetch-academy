from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from django.db.models import Count
from . import models


class UserLessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserLesson
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        exclude = ['password'] 


class UserProfileSerializer(serializers.ModelSerializer):
    full_name =  serializers.SerializerMethodField()

    class Meta:
        model = models.User
        fields = ['last_name', 'first_name', 'email', 'full_name']

    def get_full_name(self, model):
        return model.get_full_name()


class ProgramSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Program
        fields = ['name', 'describe', 'requirement', 'goal']


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Course
        exclude = ('is_removed', 'program', 'mentor', 'students', 'lessons',)   


# class UserCourseSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = models.Participation
#         fields = '__all__' 
#         depth = 2 


class UserCourseSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)
    course = CourseSerializer(read_only=True)
    program = serializers.SerializerMethodField()
    mentor = serializers.SerializerMethodField()
    student_count = serializers.SerializerMethodField()
    opened_lesson_count = serializers.SerializerMethodField()

    class Meta:
        model = models.Participation
        fields = ['begin', 'end', 'user', 'program', 'id', 'mentor', 'student_count', 'opened_lesson_count','course']
        depth = 1
    
    def get_program(self, model):
        serializer = ProgramSerializer(model.course.program)
        return serializer.data
    
    def get_mentor(self, model):
        return model.course.mentor.get_full_name()
    
    def get_student_count(self, model):
        return model.course.students.count()  
    
    def get_opened_lesson_count(self, model):
        # return len(model.course.opened_lessons)
        return model.course.opened_lessons.count()


class DetailUserLessonsSerializers(serializers.ModelSerializer):
    user_lessons = UserLessonSerializer(many=True)
    class Meta:
        model = models.Lesson
        fields = ['id', 'created', 'modified', 'files', 'videos', 'title', 'content', 'program', 'user_lessons']

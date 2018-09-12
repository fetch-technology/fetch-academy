from rest_framework import serializers
from django.utils.duration import _get_duration_components
from . import models


class UserLessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserLesson
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = '__all__' 

        
class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Course
        fields = '__all__'  


class UserCourseSerializer(serializers.ModelSerializer):
    course_title = serializers.SerializerMethodField(source="get_course_title")
    begin = serializers.SerializerMethodField(source="get_begin")
    end = serializers.SerializerMethodField(source="get_end")
    mentor_name = serializers.SerializerMethodField(source="get_mentor_name")

    class Meta:
        model = models.Participation
        fields = ['course_title', 'begin', 'end', 'mentor_name', 'course'] 
    
    def get_course_title(self, model):
        return model.course.title

    def get_end(self, model):
        return model.course.end

    def get_begin(self, model):
        return model.course.begin

    def get_mentor_name(self, model):
        return model.course.mentor.get_full_name();
    
  
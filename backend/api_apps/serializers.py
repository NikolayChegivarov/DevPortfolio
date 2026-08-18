from rest_framework import serializers
from .models import Project, Feedback


class ProjectSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Project"""
    
    class Meta:
        model = Project
        fields = [
            'id', 
            'title', 
            'description', 
            'stack', 
            'github_url', 
            'demo_url', 
            'image_url',
            'order',
            'created_at'
        ]
        # Только для чтения (нельзя изменять через API)
        read_only_fields = ['id', 'created_at']


class FeedbackSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Feedback"""
    
    class Meta:
        model = Feedback
        fields = ['id', 'name', 'email', 'phone', 'message', 'created_at']
        read_only_fields = ['id', 'created_at', 'status']  # status устанавливается автоматически

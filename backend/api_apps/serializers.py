from rest_framework import serializers
from .models import Project, Feedback


class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'description', 'stack',
            'github_url', 'demo_url', 'image_url', 'image',
            'order', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

    def get_image(self, obj):
        if not obj.image:
            return None
        image_str = str(obj.image)
        # Если уже полный URL — возвращаем как есть
        if image_str.startswith('http'):
            return image_str
        # Иначе строим полный URL с портом
        return f'https://gusarov-dev.duckdns.org:8443/media/{image_str}'


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id', 'name', 'email', 'phone', 'message', 'created_at']
        read_only_fields = ['id', 'created_at', 'status']


from rest_framework import generics, status
from rest_framework.response import Response
from .models import Project, Feedback
from .serializers import ProjectSerializer, FeedbackSerializer


class ProjectListAPIView(generics.ListAPIView):
    """
    API для получения списка проектов
    GET /api/projects/
    """
    queryset = Project.objects.filter(is_active=True).order_by('order', '-created_at')
    serializer_class = ProjectSerializer


class ProjectDetailAPIView(generics.RetrieveAPIView):
    """
    API для получения одного проекта по ID
    GET /api/projects/<id>/
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class FeedbackCreateAPIView(generics.CreateAPIView):
    """
    API для создания нового сообщения
    POST /api/feedback/
    """
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

    def perform_create(self, serializer):
        """Устанавливаем статус 'new' по умолчанию"""
        serializer.save(status='new')

    def create(self, request, *args, **kwargs):
        """Обрабатываем создание и возвращаем кастомный ответ"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Возвращаем успешный ответ с данными
        return Response(
            {
                'success': True,
                'message': 'Сообщение успешно отправлено!',
                'data': serializer.data
            },
            status=status.HTTP_201_CREATED
        )

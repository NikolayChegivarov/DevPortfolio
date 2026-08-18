from django.urls import path
from .views import ProjectListAPIView, ProjectDetailAPIView, FeedbackCreateAPIView

urlpatterns = [
    # Проекты
    path('projects/', ProjectListAPIView.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetailAPIView.as_view(), name='project-detail'),
    
    # Обратная связь
    path('feedback/', FeedbackCreateAPIView.as_view(), name='feedback-create'),
]

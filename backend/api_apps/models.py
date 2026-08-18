from django.db import models
from django.utils import timezone


class Project(models.Model):
    """Модель для проектов в портфолио"""

    # Основные поля
    title = models.CharField(max_length=200, verbose_name="Название проекта")
    description = models.TextField(verbose_name="Описание")
    stack = models.CharField(max_length=500, verbose_name="Стек технологий")

    # Ссылки
    github_url = models.URLField(blank=True, null=True, verbose_name="Ссылка на GitHub")
    demo_url = models.URLField(blank=True, null=True, verbose_name="Ссылка на демо")

    # Изображение (пока текстовое поле, позже добавим загрузку файлов)
    image_url = models.URLField(blank=True, null=True, verbose_name="URL изображения")

    # Сортировка и статус
    order = models.PositiveIntegerField(default=0, verbose_name="Порядок отображения")
    is_active = models.BooleanField(default=True, verbose_name="Активен")

    # Даты
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title


class Feedback(models.Model):
    """Модель для обратной связи с формы"""

    # Контактные данные
    name = models.CharField(max_length=100, verbose_name="Имя")
    email = models.EmailField(verbose_name="Email")
    phone = models.CharField(max_length=20, blank=True, null=True, verbose_name="Телефон")

    # Сообщение
    message = models.TextField(verbose_name="Сообщение")

    # Статус обработки
    STATUS_CHOICES = (
        ('new', 'Новое'),
        ('read', 'Прочитано'),
        ('replied', 'Отвечено'),
        ('archived', 'Архивировано'),
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='new',
        verbose_name="Статус"
    )

    # Даты
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата получения")

    class Meta:
        verbose_name = "Сообщение"
        verbose_name_plural = "Сообщения"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.created_at.strftime('%d.%m.%Y %H:%M')}"
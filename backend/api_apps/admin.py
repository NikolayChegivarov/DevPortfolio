from django.contrib import admin
from .models import Project, Feedback


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    """Настройка отображения проектов в админке"""

    list_display = ['title', 'stack', 'is_active', 'order', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title', 'description', 'stack']
    list_editable = ['is_active', 'order']
    ordering = ['order', '-created_at']
    fieldsets = (
        ('Основная информация', {
            'fields': ('title', 'description', 'stack')
        }),
        ('Ссылки', {
            'fields': ('github_url', 'demo_url', 'image_url')
        }),
        ('Настройки отображения', {
            'fields': ('order', 'is_active')
        }),
        ('Даты', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)  # Сворачиваемый блок
        }),
    )
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    """Настройка отображения сообщений в админке"""

    list_display = ['name', 'email', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['name', 'email', 'message']
    list_editable = ['status']
    readonly_fields = ['created_at']
    fieldsets = (
        ('Контактные данные', {
            'fields': ('name', 'email', 'phone')
        }),
        ('Сообщение', {
            'fields': ('message',)
        }),
        ('Статус', {
            'fields': ('status',)
        }),
        ('Дата получения', {
            'fields': ('created_at',)
        }),
    )
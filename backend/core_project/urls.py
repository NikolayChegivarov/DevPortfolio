from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_apps.urls')),  # Все API будут доступны по /api/...
    path('', index, name='index'),  # Все остальные маршруты → React
    # Добавляем catch-all для React-маршрутов
    re_path(r'^(?:.*)/?$', index, name='index'),
]

# Добавляем для отдачи статики в режиме разработки
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
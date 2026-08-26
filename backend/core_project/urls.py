from django.contrib import admin
from django.urls import path, include
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_apps.urls')),  # Все API будут доступны по /api/...
    path('', index, name='index'),  # Все остальные маршруты → React
]
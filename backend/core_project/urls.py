from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_apps.urls')),  # Все API будут доступны по /api/...
]
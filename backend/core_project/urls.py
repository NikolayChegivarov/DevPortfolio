from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_apps.urls')),
]

# Статика и медиа должны быть ПЕРЕД catch-all
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Catch-all для React (ДОЛЖЕН БЫТЬ ПОСЛЕДНИМ!)
urlpatterns += [
    re_path(r'^(?:.*)/?$', index, name='index'),
]
import os
from pathlib import Path
from dotenv import load_dotenv

# Загружаем переменные окружения
load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

# --- Безопасность ---
SECRET_KEY = os.getenv('SECRET_KEY')
DEBUG = True    # В продакшене ставить False!


# --- БЕЗОПАСНОСТЬ (HTTPS) ---
# CSRF_COOKIE_SECURE = True
# SESSION_COOKIE_SECURE = True
# SECURE_SSL_REDIRECT = True
# SECURE_HSTS_SECONDS = 31536000  # 1 год
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True
# SECURE_HSTS_PRELOAD = True




ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    '192.168.1.65',
    'gusarov-dev.duckdns.org',
]

# --- Установленные приложения ---
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    # 'whitenoise.runserver_nostatic',  # WhiteNoise
    'django.contrib.staticfiles',

    # Сторонние приложения
    'rest_framework',
    'corsheaders',

    # Наше приложение
    'api_apps',
]

# --- Промежуточные слои (Middleware) ---
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # 'whitenoise.middleware.WhiteNoiseMiddleware',  # WhiteNoise
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# --- WhiteNoise для статики в продакшене ---
# STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

ROOT_URLCONF = 'core_project.urls'

# --- НАСТРОЙКА ШАБЛОНОВ (ИСПРАВЛЯЕМ ОШИБКУ) ---
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'core_project', 'templates')],  # Добавляю папку шаблонов
        'APP_DIRS': True,  # Django будет искать шаблоны в папках templates каждого приложения
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core_project.wsgi.application'

# --- БАЗА ДАННЫХ ---
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME', 'devportfolio_db'),
        'USER': os.getenv('DB_USER', 'devportfolio_user'),
        'PASSWORD': os.getenv('DB_PASSWORD', 'your_strong_password'),
        'HOST': os.getenv('DB_HOST', 'localhost'),
        'PORT': os.getenv('DB_PORT', '5432'),
    }
}

# --- Валидация паролей ---
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# --- Интернационализация ---
LANGUAGE_CODE = 'ru-ru'
TIME_ZONE = 'Europe/Moscow'
USE_I18N = True
USE_TZ = True

# --- СТАТИЧЕСКИЕ ФАЙЛЫ ---
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')  # Для сбора статики в продакшене
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),  # Папка static в корне проекта
    os.path.join(BASE_DIR, 'static/assets'),
    os.path.join(BASE_DIR, '../frontend/dist'),   # Путь к React
]
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Для продакшена добавляем путь к React
if not DEBUG:
    STATICFILES_DIRS.append(os.path.join(BASE_DIR, 'static'))


# --- Настройки CORS (для React) ---
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Vite
    "http://127.0.0.1:5173",
    "http://localhost:3000",  # Если используете Create React App
    "http://127.0.0.1:3000",
    "https://gusarov-dev.duckdns.org",  # ← ОБЯЗАТЕЛЬНО (https!)
    "http://gusarov-dev.duckdns.org",
]

# --- DRF настройки ---
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',  # Пока открыто для разработки
    ]
}

# --- AutoField ---
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
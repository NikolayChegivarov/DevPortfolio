# 📁 Схема проекта DevPortfolio
## 🌐 Общая архитектура
```plaintext
DevPortfolio/
├── backend/          # Django REST API
├── frontend/         # React + TypeScript + Vite
├── .git/             # Git репозиторий
├── .gitignore        # Игнорируемые файлы
├── .env.example      # Шаблон переменных окружения
├── README.md         # Документация
└── .venv/            # Виртуальное окружение Python
```

## 🐍 Backend (Django)
```plaintext
backend/
├── api_apps/                    # Основное приложение API
│   ├── migrations/              # Миграции БД
│   │   └── 0001_initial.py      # Начальная миграция
│   ├── __pycache__/             # Кэш Python
│   ├── admin.py                 # Настройка админ-панели
│   ├── apps.py                  # Конфигурация приложения
│   ├── models.py                # Модели данных (Project, Feedback)
│   ├── serializers.py           # Сериализаторы DRF
│   ├── urls.py                  # Маршруты API
│   │   ├── /api/projects/       # Список проектов
│   │   ├── /api/projects/<id>/  # Детали проекта
│   │   └── /api/feedback/       # Отправка обратной связи
│   ├── views.py                 # Представления (APIView)
│   └── tests.py                 # Тесты
│
├── core_project/                # Основные настройки проекта
│   ├── templates/               # HTML шаблоны
│   │   └── index.html           # Основной шаблон для React
│   ├── __pycache__/             # Кэш Python
│   ├── asgi.py                  # ASGI конфигурация
│   ├── settings.py              # Настройки Django
│   │   ├── INSTALLED_APPS       # Django + DRF + CORS
│   │   ├── DATABASES            # PostgreSQL
│   │   ├── STATIC_URL/ROOT      # Статические файлы
│   │   └── TEMPLATES            # Шаблонизатор
│   ├── urls.py                  # Главные маршруты
│   │   ├── /admin/              # Админ-панель
│   │   ├── /api/                # API маршруты
│   │   ├── /                    # Главная (React)
│   │   └── /*                   # Catch-all для React
│   ├── views.py                 # Представление для index
│   └── wsgi.py                  # WSGI конфигурация
│
├── static/                      # Статические файлы (сборка)
│   ├── assets/                  # Собранные JS/CSS
│   │   ├── index.[hash].css
│   │   └── index.[hash].js
│   ├── favicon.svg
│   ├── icons.svg
│   └── index.html
│
├── staticfiles/                 # Собранная статика (продакшен)
├── .env                         # Переменные окружения (не в Git)
├── .idea/                       # IDE настройки
├── .venv/                       # Виртуальное окружение
├── Draft.md                     # Черновики
├── manage.py                    # Django управляющий скрипт
└── requirements.txt             # Python зависимости
    ├── Django
    ├── djangorestframework
    ├── django-cors-headers
    ├── psycopg2-binary
    └── python-dotenv
```
## ⚛️ Frontend (React + TypeScript)
```plaintext
frontend/
├── dist/                        # Сборка для продакшена
│   ├── assets/                  # Минифицированные файлы
│   │   ├── index.[hash].css
│   │   └── index.[hash].js
│   ├── favicon.svg
│   ├── icons.svg
│   └── index.html
│
├── src/                         # Исходный код
│   ├── components/              # React компоненты
│   │   ├── FeedbackForm.tsx     # Форма обратной связи
│   │   ├── Header.tsx           # Шапка сайта
│   │   ├── Hero.tsx             # Главный блок
│   │   ├── ProjectList.tsx      # Список проектов (TS)
│   │   └── TechStack.tsx        # Стек технологий
│   │
│   ├── hooks/                   # Кастомные хуки
│   │   ├── useNavigation.ts     # Навигация
│   │   └── useScrollToContact.ts # Скролл к контактам
│   │
│   ├── services/                # API сервисы
│   │   └── api.ts               # Axios настройки, запросы к API
│   │
│   ├── types/                   # TypeScript типы
│   │   ├── index.ts             # Общие типы (Project, Feedback)
│   │   └── test.ts
│   │
│   ├── utils/                   # Утилиты
│   │   └── animations.ts        # Анимации
│   │
│   ├── assets/                  # Статические ресурсы
│   ├── App.tsx                  # Главный компонент
│   ├── index.css                # Глобальные стили (Tailwind)
│   └── main.tsx                 # Точка входа
│
├── public/                      # Публичные файлы
│   ├── favicon.svg
│   └── icons.svg
│
├── node_modules/                # NPM зависимости
├── .env                         # Переменные окружения
├── .gitignore
├── eslint.config.js             # ESLint настройки
├── index.html                   # HTML шаблон
├── package.json                 # NPM зависимости
│   ├── react + react-dom
│   ├── typescript
│   ├── vite
│   ├── tailwindcss
│   ├── axios
│   └── framer-motion
├── package-lock.json
├── postcss.config.js            # PostCSS (Tailwind)
├── README.md
├── tailwind.config.js           # Tailwind настройки
├── tsconfig.json                # TypeScript конфиг
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts               # Vite настройки
```
## 🔄 Взаимодействие компонентов
```plaintext
┌─────────────────────────────────────────────────────────────┐
│                      Пользователь                           │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              Frontend (React + Vite)                        │
│  ┌───────────────────────────────────────────────────┐      │
│  │  components/                                      │      │
│  │  ├── Header.tsx                                   │      │
│  │  ├── Hero.tsx                                     │      │
│  │  ├── ProjectList.tsx  ──────┐                     │      │
│  │  ├── TechStack.tsx          │                     │      │
│  │  └── FeedbackForm.tsx       │                     │      │
│  └─────────────────────────────┼─────────────────────┘      │
│                                │                            │
│  ┌─────────────────────────────▼─────────────────────┐      │
│  │  services/api.ts (Axios)                          │      │
│  │  GET  /api/projects/                              │      │
│  │  POST /api/feedback/                              │      │
│  └─────────────────────────────┬─────────────────────┘      │
└─────────────────────────────────┼───────────────────────────┘
                                  │ HTTP
                                  ▼
┌─────────────────────────────────────────────────────────────┐
│              Backend (Django REST)                          │
│  ┌───────────────────────────────────────────────────┐      │
│  │  core_project/urls.py                             │      │
│  │  ├── /api/  → api_apps.urls                       │      │
│  │  ├── /     → index (React)                        │      │
│  │  └── /*    → index (catch-all)                    │      │
│  └─────────────────────────────┬─────────────────────┘      │
│                                │                            │
│  ┌─────────────────────────────▼─────────────────────┐      │
│  │  api_apps/                                        │      │
│  │  ├── views.py (APIView)                           │      │
│  │  │   ├── ProjectListAPIView                       │      │
│  │  │   ├── ProjectDetailAPIView                     │      │
│  │  │   └── FeedbackCreateAPIView                    │      │
│  │  ├── serializers.py (DRF)                         │      │
│  │  └── models.py                                    │      │
│  │      ├── Project (title, description, ...)        │      │
│  │      └── Feedback (name, email, message)          │      │
│  └─────────────────────────────┬─────────────────────┘      │
│                                │                            │
│  ┌─────────────────────────────▼─────────────────────┐      │
│  │  settings.py                                      │      │
│  │  ├── DATABASES: PostgreSQL                        │      │
│  │  ├── STATIC: сборка фронтенда                     │      │
│  │  └── TEMPLATES: index.html                        │      │
│  └───────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │   PostgreSQL Database   │
                    │   ├── api_apps_project  │
                    │   └── api_apps_feedback │
                    └─────────────────────────┘
```
## 🗄️ Модели данных
Project
Поле	             Тип	              Описание
title	               CharField	     Название проекта
description	   TextField	      Описание
image	           ImageField	   Изображение
github_url    	URLField	     Ссылка на GitHub
demo_url	     URLField	     Ссылка на демо
technologies	JSONField	    Стек технологий
created_at	    DateTimeField	Дата создания
updated_at	  DateTimeField	Дата обновления
Feedback
Поле	             Тип	              Описание
name	            CharField	      Имя отправителя
email	            EmailField	    Email
message	       TextField	       Сообщение
created_at	    DateTimeField	Дата отправки
## 🔧 Стек технологий
#### Backend
Framework: Django 4.x
API: Django REST Framework
База данных: PostgreSQL
CORS: django-cors-headers
Переменные окружения: python-dotenv

#### Frontend
Framework: React 18
Язык: TypeScript
Сборщик: Vite
Стилизация: Tailwind CSS
Анимации: Framer Motion
HTTP клиент: Axios
Линтер: ESLint

## 📦 Процесс сборки и деплоя
```bash
#### 1. Сборка фронтенда
cd frontend/
npm run build          # Создает dist/ с оптимизированными файлами

#### 2. Сборка статики для Django
cd ../backend/
python manage.py collectstatic  # Копирует frontend/dist/ → backend/static/

#### 3. Запуск сервера
python3 manage.py runserver      # Раздает статику и API
```
## 🔐 Переменные окружения
Backend (.env)
```env
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_strong_password
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=your_secret_key_here
```
Frontend (.env)
Для **разработки** (локально):
```env
VITE_API_URL=http://localhost:8000/api
```
Для продакшена (на сервере):
```env
VITE_API_URL=https://gusarov-dev.duckdns.org:8443/api
```


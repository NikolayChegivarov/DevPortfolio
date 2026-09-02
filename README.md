# DevPortfolio

Сайт-визитка для IT-специалиста
**DevPortfolio** — это готовое решение для создания персонального сайта-портфолио разработчика.
Проект объединяет мощный бэкенд на Django и современный интерактивный фронтенд на React, что позволяет легко управлять контентом через админку и демонстрировать свои работы в удобном формате.

## 🎯 Для чего этот проект?
Этот сайт решает задачу быстрого и красивого представления ваших профессиональных навыков и проектов.
Вместо того чтобы писать сайт с нуля, вы получаете готовую архитектуру, которая позволяет:

- **Добавлять проекты** в портфолио через простую админ-панель Django.
- **Принимать заявки** от клиентов через встроенную форму обратной связи.
- **Демонстрировать стек технологий** и опыт работы.
- **Легко менять дизайн** и структуру под свои нужды.

## 🧩 Как это работает?
1. Вы добавляете свои проекты в админ-панель (`/admin`).
2. React-фронтенд автоматически подхватывает их и отображает в виде карточек.
3. Пользователи могут просматривать ваши работы и оставлять заявки.
4. Все заявки сохраняются в базе данных и доступны вам в админке.

## 🚀 Технологии

### Backend

- Django 4.x
- Django REST Framework
- PostgreSQL
- Gunicorn
- WhiteNoise

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Axios


## 📦 Установка и запуск
### 1. Клонировать репозиторий
```bash
git clone <url>
cd DevPortfolio
```

### 2. Настроить бэкенд
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate   # Windows
pip install -r requirements.txt
cp .env.example .env
# Заполните .env своими данными
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### 3. Настроить фронтенд
```bash
cd frontend
npm install
cp .env.example .env
# Заполните .env (VITE_API_URL)
npm run dev
```

### 4. Запуск в продакшене (через Gunicorn)
```bash
cd backend
source .venv/bin/activate
gunicorn --bind 0.0.0.0:8002 core_project.wsgi:application
```

### 5. Сборка статики
```bash
cd frontend
npm run build
cd ../backend
python manage.py collectstatic --noinput
```


## 🔧 Переменные окружения
### Backend (.env)
```env
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_strong_password
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=your_secret_key_here
```

### Frontend (.env)
```env
# Для разработки
VITE_API_URL=http://localhost:8000/api

# Для продакшена
# VITE_API_URL=https://your-domain.com:8443/api
```


## 📁 Структура проекта

Подробная структура описана в [PROJECT_STRUCTURE.md](https://./PROJECT_STRUCTURE.md).

## 🐳 Docker (опционально)

Для запуска через Docker:
```bash
docker-compose up -d
```

## 🧪 Тесты
```bash
cd backend
python manage.py test
```


## 📄 Лицензия

MIT

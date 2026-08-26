from django.shortcuts import render

def index(request):
    """Главная страница с React"""
    return render(request, 'index.html')

from django.shortcuts import render
# from app.models import HomePageParagraph


def home_page(request):
    return render(request, 'base.html')

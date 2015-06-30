from django.db import models


class HomePageParagraph(models.Model):
    text = models.TextField(default='')

from django.db import models

# Create your models here.

class Todo(models.Model):
    tesk=models.TextField()
    description=models.TextField()
    
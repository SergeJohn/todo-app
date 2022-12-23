from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Todo(models.Model):
    task = models.CharField(max_length=200)
    completed = models.BooleanField(default=False, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.task[0:50]


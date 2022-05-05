from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class CustomUser(AbstractUser):
    name = models.CharField(blank=True, max_length=120)
    bio = models.TextField()


# djsr/authentication/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
class CustomUser(AbstractUser):
    name = models.CharField(blank=True, max_length=120)
    email = models.CharField(blank=True, max_length=120)
    profile_img = models.TextField()
    bio = models.TextField()
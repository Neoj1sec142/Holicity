from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    profile_img = models.TextField()
    bio = models.TextField()
    def __str__(self):
        return self.username
    
class Follower(models.Model):
    name = models.CharField(max_length=100)
    users = models.ForeignKey(User, on_delete=models.CASCADE, related_name="followers")
    def __str__(self):
        return self.name

class Following(models.Model):
    name = models.CharField(max_length=100)
    users = models.ForeignKey(User, on_delete=models.CASCADE, related_name='following')
    def __str__(self):
        return self.name

class Post(models.Model):
    type = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    related_links = models.CharField(max_length=500)
    post_img = models.TextField()
    description = models.CharField(max_length=2500)
    def __str__(self):
        return self.title

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    rating = models.IntegerField(null=True)
    description = models.CharField(max_length=1500)
    def __str__(self):
        return self.user

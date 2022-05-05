from django.contrib import admin
from .models import User, Follower, Following, Post, Comment
# Register your models here.

admin.site.register(User)
admin.site.register(Follower)
admin.site.register(Following)
admin.site.register(Post)
admin.site.register(Comment)
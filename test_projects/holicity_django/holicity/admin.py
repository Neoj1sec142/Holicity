from django.contrib import admin
from .models import User, Follower, Following, Post, Comment
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)
admin.site.register(Follower)
admin.site.register(Following)
admin.site.register(Post)
admin.site.register(Comment)
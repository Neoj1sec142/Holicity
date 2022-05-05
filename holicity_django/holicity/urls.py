from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
  path('', views.UserList.as_view(), name='user_list'),
  path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
  path('followers/', views.FollowerList.as_view(), name='follower_list'),
  path('followers/<int:pk>', views.FollowerDetail.as_view(), name='follower_detail'),
  path('following/', views.FollowingList.as_view(), name='following_list'),
  path('following/<int:pk>', views.FollowingDetail.as_view(), name='following_detail'),
  path('posts/', views.PostList.as_view(), name='post_list'),
  path('posts/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
  path('comments/', views.CommentList.as_view(), name='comment_list'),
  path('comments/<int:pk>', views.CommentDetail.as_view(), name='comment_detail')
]
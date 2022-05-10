from django.urls import path
from holicity import serializers
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as jwt_views

# urlpatterns = [
#   path('', views.UserList.as_view(), name='user_list'),
#   path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
#   path('followers/', views.FollowerList.as_view(), name='follower_list'),
#   path('followers/<int:pk>', views.FollowerDetail.as_view(), name='follower_detail'),
#   path('following/', views.FollowingList.as_view(), name='following_list'),
#   path('following/<int:pk>', views.FollowingDetail.as_view(), name='following_detail'),
#   path('posts/', views.PostList.as_view(), name='post_list'),
#   path('posts/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
#   path('comments/', views.CommentList.as_view(), name='comment_list'),
#   path('comments/<int:pk>', views.CommentDetail.as_view(), name='comment_detail')
# ]

urlpatterns = [
    # JavaScript Web Tokens
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(),    name='token-refresh'),
    path('blacklist/', views.LogoutUser.as_view(),
    name='token-blacklist'),
    # User paths
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/create', views.UserCreate.as_view(), name='user_create'),
    path('users/logout', views.UserLogout.as_view(), name='user_logout'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('users/<str:username>', views.UserDetailByUsername.as_view(), name='user_detail_by_username')
]

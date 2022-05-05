from rest_framework import serializers
from .models import User, Follower, Following, Post, Comment

class UserSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        many=True,
        read_only=True
    )
    user_url = serializers.ModelSerializer.serializer_url_field(
         view_name='user_detail'
    )
    class Meta:
        model = User
        fields = ('id', 'user_url', 'name', 'profile_img', 'email', 'username', 'followers', 'following', 'posts', 'comments')

class FollowerSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='follower_detail',
        read_only=True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    class Meta:
        model = Follower
        fields = ('id', 'user', 'user_id', 'name')

class FollowingSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='following_detail',
        read_only=True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    class Meta:
        model = Following
        fields = ('id', 'user', 'user_id', 'name')

class PostSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.HyperlinkedRelatedField(
        view_name='post_detail',
        read_only=True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    class Meta:
        model = Post
        fields = ('id', 'post', 'user_id', 'type', 'title', 'related_links', 'post_img', 'description', 'comments')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='comment_detail',
        read_only=True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    class Meta:
        model = Comment
        fields = ('id', 'user_id', 'post', 'rating', 'description')
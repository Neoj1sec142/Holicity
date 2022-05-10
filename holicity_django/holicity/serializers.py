from rest_framework import serializers
from .models import User, Follower, Following, Post, Comment
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('id','email','first_name','last_name','username','password','profile_img', 'bio', 'followers', 'following', 'posts', 'comments')
        extra_kwargs = {'write_only': True}
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

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
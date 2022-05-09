import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { GetUserByName, GetFollowersByUSer, GetFollowingByFollower, Follow, Unfollow} from '../services/UserServices'
import { GetPostByUser, RemovePost } from '../services/PostServices'
import PostCard from '../components/PostCard.jsx'



const Profile = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const profileUser = params.username

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [btn, setBtn] = useState(false)

    //use effect to check if user on page is the owner or visitor
    useEffect(() => {
        if(profileUser){
            const getData = async () => {
                const data = await GetUserByName(profileUser)
                setUser(data)
            }
            getData()
        }
    }, [profileUser, props.user])

    //use effect to get the posts of the user who owns page
    useEffect(() => {
        const getProfilePosts = async () => {
            if(user.id){
                const data = await GetPostByUser(user.id)
                setPosts(data)
            }
        }
        getProfilePosts()
    }, [user])

    //function to delete post
    const deletePost = (id) => {
        if(window.confirm("Are you sure you want to remove this vibe?")){
            RemovePost(id)
            window.location.reload(false)
        }
    }
    //function to handle the edit/follow btn
    const handleClick = async () => {
        if(followers.filter((fol) => fol.id === props.user.id).length === 0){
            await Follow(user.id, props.user.id)
            setBtn(true)
        }else{
            await Unfollow(user.id, props.user.id)
            setBtn(false)
        }
    }

    const navUp = () => {
        navigate('update')
    }
    // console.log(user.id, "HEYY")
    if(props.authenticated && user.id){
        return(
            <div className='profile'>
                <div className='profile-board'>
                    {user.profileImg ? 
                        <div></div>
                        :
                        <div></div>
                    
                    }
                    <div className='profile-info'>
                        <h2>{user.username}</h2>
                        <h4>Name: {user.fullName}</h4>
                        <h4>Email: {user.email}</h4>
                        {props.user.username === profileUser ?
                            <button onClick={() => navUp()}>Edit Profile</button>
                            : <button onClick={(e) => handleClick(e)}>
                                    { btn ? 'Unfollow' : 'Follow'}
                                </button>}
                    </div>
                </div>
                <div className='profile-posts'>
                    {posts.map((post, i) => (
                        <div className='post-container' key={i}>
                        <PostCard post={post}/>
                        {props.user.username === profileUser &&
                            <button onClick={() => deletePost(post.id)}>X</button> 
                        }
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (<div className='loading'>Loading....</div>)
    }
}

export default Profile
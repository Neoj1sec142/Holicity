import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { GetUserByName, GetFollowersByUSer, GetFollowingByFollower, Follow, Unfollow} from '../services/UserServices'
import { GetPostByUser } from '../services/PostServices'
import Post from '../components/PostCard.jsx'


const Profile = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const profileUser = params.username

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [btn, setBtn] = useState(false)

    useEffect(() => {
        if(profileUser){
            const getData = async () => {
                const data = await GetUserByName(profileUser)
                setUser(data)
            }
            getData()
        }
    }, [profileUser, props.user])

    useEffect(() => {
        const getProfilePosts = async () => {
            if(profileUser.id){
                const data = await GetPostByUser(profileUser.id)
                setPosts(data)
            }
        }
        getProfilePosts()
    }, [profileUser])

    const handleClick = async () => {
        if(followers.filter((fol) => fol.id === props.user.id).length === 0){
            await Follow(user.id, props.user.id)
            setBtn(true)
        }else{
            await Unfollow(user.id, props.user.id)
            setBtn(false)
        }
    }

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
                            <button>Edit Profile</button>
                            : <button onClick={(e) => handleClick(e)}>
                                    { btn ? 'Unfollow' : 'Follow'}
                                </button>}
                    </div>
                </div>
                <div className='profile-posts'>

                </div>
            </div>
        )
    } else {
        return (<div className='loading'>Loading....</div>)
    }
}

export default Profile
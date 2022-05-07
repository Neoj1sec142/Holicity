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
    return(
        <div></div>
    )
}

export default Profile
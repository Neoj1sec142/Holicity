import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { GetUserDetail, GetFollowerByUser, GetFollowingByFollower, Follow, Unfollow} from '../services/UserServices'
import { GetPostByUser, RemovePost } from '../services/PostServices'
import PostCard from '../components/PostCard.jsx'
import {Card} from 'react-bootstrap'



const Profile = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const profileUser = params.username
    // console.log(profileUser)

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [btn, setBtn] = useState(false)

    //use effect to check if user on page is the owner or visitor
    useEffect(() => {
        if(profileUser){
            const getData = async () => {
                const data = await GetUserDetail(profileUser)
                setUser(data)
            }
            getData()
        }
    }, [profileUser, props.user])

    useEffect(() => {
        const getFollowers = async () => {
            if (profileUser) {
                const followMe = await GetFollowerByUser(profileUser)
                setFollowers(followMe[0].followers)
            }
        }
        const getFollowing = async () => {
            if (profileUser) {
                const amFollowing = await GetFollowingByFollower(profileUser)
                console.log(amFollowing, 'THIS ONE')
                setFollowing(amFollowing)
            }
        }
        getFollowers()
        getFollowing()
    },[profileUser, btn])

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
    console.log(following, "HEYY")
    if(props.authenticated && user.id && following && followers){
        return(
            <div className='profile' style={{maxWidth: '60%'}}>
                <Card className='d-flex flex-row justify-content-center' >
                <div className='d-flex align-items-center' style={{maxWidth: '60%'}}>
                    {user.profileImg 
                        ?   <img src={`${user.profileImg}`} alt='profile-img' style={{maxWidth: '90px', borderRadius: '50px'}}/>
                        :   <img src='../assets/no_img.jpeg' alt='no-profile-img'/>
                    }
                    <div className='d-flex justify-content-center'>
                        <Card.Title>{user.username}</Card.Title>
                        <Card.Text>Name: {user.fullname}</Card.Text>
                        <Card.Text>Email: {user.email}</Card.Text>
                        <Card.Text>Followers: {followers.length}</Card.Text>
                        <Card.Text>Following: {following.length}</Card.Text>
                        
                        {props.user.id === parseInt(profileUser) 
                            ?   <button onClick={() => navUp()}>Edit Profile</button>
                            :   <button onClick={(e) => handleClick(e)}>
                                    { btn ? 'Unfollow' : 'Follow'}
                                </button>}
                        {/* {props.user.id === parseInt(profileUser) 
                        ?   <a href='http://localhost:3003' target='_blank' rel="noreferrer">Messenger</a>
                        :   <div></div>
                        } */}
                    </div>
                    
                </div>
                </Card>
                <Card className='d-flex flex-row justify-content-center'>
                <div className='d-flex align-items-center' style={{maxWidth: '60%'}}>
                    {posts.map((post, i) => (
                        <div className='post-container' key={i}>
                        <PostCard post={post}/>
                        {props.user.id === parseInt(profileUser) &&
                            <button onClick={() => deletePost(post.id)}>X</button> 
                        }
                        </div>
                    ))}
                </div>
                </Card>
            </div>
        )
    } else {
        return (<div className='loading'>Loading....</div>)
    }
}

export default Profile
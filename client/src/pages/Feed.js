import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GetPosts } from '../services/PostServices'
import PostCard from '../components/PostCard.jsx'


const Feed = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [feed, setFeed] = useState({})
    useEffect(() => {
        const GetData = async () =>{
            const data = await GetPosts()
            setFeed(data)
        }
        GetData()
      }, [id])
    console.log(feed, "FEED")
    if(feed.length){
    return (
        <div className='feed'>
            {feed.sort((a,b) => {return (a.updatedAt < b.updatedAt) ? 1 : -1} ).map((post, i) => (
                <div key={i} className='post-container'>
                    <div className='username' onClick={() => navigate(`/profile/${post.User.username}`)} >
                    {post.User.profileImg ?
                    <div className='profile-img-container username-stripe-img' style={{backgroundImage:`url(${post.User.profileImg})`}}></div> 
                    :
                    <div className='profile-img-container username-stripe-img'></div>
                    }
                    {post.User.username}
                    </div>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default Feed
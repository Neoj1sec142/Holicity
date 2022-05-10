import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GetPosts } from '../services/PostServices'
import PostCard from '../components/PostCard.jsx'
import { Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Feed = (props) => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [feed, setFeed] = useState({})
    useEffect(() => {
        const GetData = async () =>{
            const data = await GetPosts()
            // console.log(data)
            setFeed(data)
        }
        GetData()
      }, [])
    console.log(feed, "FEED")
    if(feed.length){
    return (
        <div className='feed'>
            <Card>
            {feed.sort((a,b) => {return (a.updatedAt < b.updatedAt) ? 1 : -1} ).map((post, i) => (
                <Card.Body key={i} className='post-container'>
                    <div className='username' onClick={() => navigate(`/profile/${post.userId}`)} >
                    {post.User.profileImg 
                        ?   <img src={`${post.User.profileImg}`} className="d-flex justify-content-start"
                        alt='profile-img' style={{maxWidth: '50px'}}/>
                        :   <img src='../assets/no_img.jpeg' className="d-flex justify-content-center"
                        alt='no-profile-img'/>
                    // <div className='profile-img-container username-stripe-img' style={{backgroundImage:`url(${feed.User.profileImg})`}}></div> 
                    // :
                    // <div className='profile-img-container username-stripe-img'></div>
                    }
                    <Card.Title className='d-flex align-items-top'>{post.User.username}</Card.Title>
                    </div>
                    
                    <PostCard post={post} />
                </Card.Body>
            ))}
            </Card>
        </div>
    )
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default Feed
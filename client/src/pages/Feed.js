import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GetPosts, GetPostByType } from '../services/PostServices'
import PostCard from '../components/PostCard.jsx'
import { allTypes } from '../components/allTypes'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Feed = (props) => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [feed, setFeed] = useState({})
    const [browsed, setBrowsed] = useState('')
    const [grabType, setGrabType] = useState([])
    // const [post, setPost] = useState({})
    useEffect(() => {
        const GetData = async () =>{
            const data = await GetPosts()
            // console.log(data)
            setFeed(data)
        }
        if(browsed !== '---------------------------'){
            const getTypes = async () => {
                const type = GetPostByType(browsed)
                setGrabType(type)
            }
            getTypes()
        }
        GetData()
      }, [])

    

    const handleSelect = (e) => {
        // console.log(e.target.value, "SELECTION")
        setBrowsed(e.target.value)
    }

    console.log(feed, "FEED")
    if(feed.length){
    return (
        <div className='feed'>
            <form >
                <div>
                    <h2>Check The Energy in the Room</h2>
                    <label htmlFor='type'></label>
                    <select onChange={(e) => handleSelect(e)} value={feed.type} name='type' id='type'>
                        {allTypes.map((type, i) => (
                            <option key={i} name='type' required>{type}</option>
                        ))}
                        
                    </select>
                </div>
            </form>
            {grabType.length 
            ? grabType.map((type, i) => (
                <Card key={i}>
                    <Card.Title> {type.Title}</Card.Title>
                </Card>
            ))
            :
            <Card>
                <Card.Title className='text-decoration-underline'>Check Recent Vibes</Card.Title>
                {feed.sort((a,b) => {return (a.updatedAt < b.updatedAt) ? 1 : -1} ).map((post, i) => (
                    <Card.Body key={i} className='post-container'>
                        <div className='border border-5 border-primary' onClick={() => navigate(`/profile/${post.userId}`)} >
                        {post.User.profileImg 
                            ?   <img src={`${post.User.profileImg}`} className="d-flex justify-content-start"
                            alt='profile-img' style={{maxWidth: '50px', borderRadius: '50px'}}/>
                            :   <img src='../assets/no_img.jpeg' className="d-flex justify-content-center"
                            alt='no-profile-img'/>
                        }
                        <Card.Title className='d-flex align-items-top'>{post.User.username}</Card.Title>
                        </div>
                        
                        <PostCard post={post} />
                    </Card.Body>
                ))}
            </Card>}
        </div>
    )
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default Feed
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetPostDetail } from '../services/PostServices'
import ReactStars from 'react-stars'

const Details = () => {
    const [det, setDet] = useState({})
    const [toggleComm, setToggleComm] = useState(false)
    const [comment, setComment] = useState({
        title: '',
        description: '',
        rating: 0
    })

    const {post_id} = useParams()
    

    useEffect(() => {
        
        const getData = async () => {
            const data = await GetPostDetail(post_id)
            setDet(data)
        }
        getData()
    }, [post_id])

    const handleChange = async (e) => {
        setComment({...comment, [e.target.name]: e.target.value})
    }
    const handleStars = (e) => {
        setComment({...comment, rating: e})
    }

    // console.log(det, "DETAILS")
    if(det.id){
        return(
            <div className='details'>
                <h3>
                    {det.title ? 
                        <span className='post-title'>
                            {det.title}
                        </span>
                        :
                        <span className='no-post-title'>
                            (NO TITLE)
                        </span>
                    }
                </h3>
                <h5>Posted by: {det.User.username}</h5> 
                <img src={det.image} alt='vibe'/>
                <h3>Url: <a href={det.url}  target="_blank"rel="noreferrer"> {det.url} </a></h3>
                <p>Description: {det.description}</p>
                {toggleComm &&
                    <div>
                        <input 
                            onChange={handleChange}
                            name='title'
                            value={comment.title}
                            placeholder="Add your thoughts..."
                        />
                        <ReactStars
                            onChange={handleStars}
                            size={24}
                            count={5}
                            color2={'#ffd700'}
                            className={'stars'}
                            half={false}
                            name='rating'
                            value={comment.rating}
                        />
                        <textarea 
                            onChange={handleChange}
                            name='description'
                            value={comment.description}
                            placeholder="Add your thoughts..."
                        />
                    </div>
                }
            </div>
        )
    }else{
        return(
            <div>Loading....</div>
        )
    }
}

export default Details
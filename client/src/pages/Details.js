import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetPostDetail } from '../services/PostServices'

const Details = () => {
    const [det, setDet] = useState({})
    const {post_id} = useParams()

    useEffect(() => {
        
        const getData = async () => {
            const data = await GetPostDetail(post_id)
            setDet(data)
        }
        getData()
    }, [post_id])

    console.log(det, "DETAILS")
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
                <img src={det.image} alt='mouth-watering dish'/>
                <h3>Url: <a href={det.url} target="_blank"> {det.url} </a></h3>
                <p>Description: {det.description}</p>
            </div>
        )
    }else{
        return(
            <div>Loading....</div>
        )
    }
}

export default Details
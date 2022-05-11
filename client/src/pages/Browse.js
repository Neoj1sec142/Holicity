import React, { useState, useEffect } from 'react'
import { GetPosts, GetPostByType } from '../services/PostServices'
import {GetNews} from '../services/OutsideServices'
import {Card} from 'react-bootstrap'


const Browse = () => {
    
    const [browsed, setBrowsed] = useState('')
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [grabType, setGrabType] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const posts = await GetPosts()
            setPosts(posts)
        }
        if(browsed !== '---------------------------'){
            const getTypes = async () => {
                const type = GetPostByType(browsed)
                setGrabType(type)
            }
            getTypes()
        }
        getPosts()
    }, [])
    // console.log(grabType, "TYPE")
    const allTypes = [
        '---------------------------',
        'News',
        'Recipe',
        'Recyclable Alternative',
        'Wildlife',
        'Natural Health',
        'Fitness',
        'Gas Alternatives',
        'Green House Effect'
    ]

    const handleSelect = (e) => {
        console.log(e.target.value, "SELECTION")
        setBrowsed(e.target.value)
    }
    // useEffect(() => {
    //     const getNews = async () => {
    //         const res = await GetNews()
    //         setNews(res)
    //     }
    //     getNews()
    // },[])
//    console.log(news, "NEWS")
    
    if(posts && news){
        return(
            <div className='browse'>
                <form >
                    <div>
                        <h2>Check The Energy in the Room</h2>
                        <label htmlFor='type'></label>
                        <select onChange={(e) => handleSelect(e)} value={post.type} name='type' id='type'>
                            {allTypes.map((type, i) => (
                                <option key={i} name='type' required>{type}</option>
                            ))}
                            
                        </select>
                    </div>
                </form>
                {browsed && news ? 
                    <div>
                        {grabType.map((post, i) => (
                            <Card key={i}>
                                <h1>Search Results</h1>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.description}</Card.Text>
                            </Card>
                        ))}
                    </div>
                    :
                    <div style={{maxWidth: '60%'}}>
                        {/* {news.data.map((value, i) => (
                        <Card key={i} className='d-flex justify-content-center'>
                            <Card.Title>{value.title}</Card.Title>
                            <img src={`${value.image_url}`} alt='text' target='_blank'/>
                            <Card.Text>{value.description}</Card.Text>
                            <a href={`${value.url}`} >Read More...</a>
                        </Card>
                        ))} */}
                    </div>
                }
               

            </div>
        )
    }
}

export default Browse
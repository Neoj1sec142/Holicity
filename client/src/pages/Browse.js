import React, { useState, useEffect } from 'react'
import { GetPosts, GetPostByType } from '../services/PostServices'

import {Card} from 'react-bootstrap'


const Browse = () => {
    
    const [browsed, setBrowsed] = useState('')
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [grabType, setGrabType] = useState([])
    

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
        // console.log(e.target.value, "SELECTION")
        setBrowsed(e.target.value)
    }
   
    
    if(posts){
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
                {browsed ? 
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
                        
                    </div>
                }
               

            </div>
        )
    }
}

export default Browse
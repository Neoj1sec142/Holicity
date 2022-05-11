import React, { useState, useEffect } from 'react'
import { GetPosts, GetPostByType } from '../services/PostServices'
import {Card} from 'react-bootstrap'


const Browse = (props) => {
    
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
    console.log(grabType, "TYPE")
    const allTypes = [
        '---------------------------',
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
        
    // },[])
   
    
    if(posts){
        return(
            <div className='browse'>
                <form >
                    {/* <input 
                        className='browse-form'
                        onChange={(e) => handleChange(e)}
                        value={query}
                        maxLength='255'
                        name='posts'
                        placeholder="Browse the Energy.."
                    />
                    <button onSubmit={handleSubmit}/> */}
                    <div>
                        
                        <label htmlFor='type'></label>
                        <select onChange={(e) => handleSelect(e)} value={post.type} name='type' id='type'>
                        <h2>Check The Energy in the Room</h2>
                            {allTypes.map((type, i) => (
                                <option key={i} name='type' required>{type}</option>
                            ))}
                            
                        </select>
                    </div>
                </form>
                {browsed && grabType.length > 1 ? 
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
                    <div></div>
                }


            </div>
        )
    }
}

export default Browse
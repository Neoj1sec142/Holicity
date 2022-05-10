import React, { useState, useEffect } from 'react'
// import {useNavigate} from 'react-router-dom'
import { CreateBlog, GetBlogs } from '../services/BlogServices'
import {Card, Button} from 'react-bootstrap'

const Blog = (props) => {

    // const navigate = useNavigate()
    
    const [blogPost, setBlogPost] = useState([])
    const [blog, setBlog] = useState({
        type: '',
        thoughts: '',
        url: ''
    })
    // console.log(topic)
    useEffect(() => {
        const getData = async () => {
            const data = await GetBlogs()
            setBlogPost(data)
        }
        getData()
    }, [])

    const allTypes = [
        '',
        'Recipe',
        'Recyclable Alternative',
        'Wildlife',
        'Natural Health',
        'Fitness',
        'Gas Alternatives',
        'Green House Effect'
    ]

    const handleType = (e) => {
        setBlog({...blog, type: e.target.value})
        
    }
    const handleChange = (e) => {
        setBlog({...blog,[e.target.name]: e.target.value})
        
        
    }
   
    const handleSubmit = async (e) => {
        const user_id = props.user.id
        e.preventDefault()
        await CreateBlog(user_id, blog)
        // navigate('/blog')
    }

    // window.top.location.reload(false)
    console.log(blogPost, "BLOGGGGGG")
    return(
        <div className='blog'>
            <Card className="position-absolute top-50 start-50 translate-middle" style={{ padding: '20px', maxWidth: '500px'}}>
                <form className='card-overlay centered' >
                    <div className='d-flex justify-content-center' style={{paddingBottom: '15px'}}>
                        <h2>Topic:</h2>
                        <label htmlFor='type'></label>
                        <select onChange={(e) => handleType(e)} value={blog.type} name='type' id='type'>
                            
                            {allTypes.map((type, i) => (
                                <option key={i} name='type'  onChange={handleChange} required>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='' style={{paddingBottom: '15px'}}>
                    <h4>~ Share your Thoughts ~</h4>
                        <input 
                            onChange={handleChange}
                            type='text'
                            value={blog.thoughts}
                            name='thoughts'
                            placeholder='~Share your thoughts~'
                            maxLength='255'
                            required
                        />
                        <h4>~ Add a Link ~</h4>
                        <input 
                            onChange={handleChange}
                            type='text'
                            value={blog.url}
                            name='url'
                            placeholder='~Links Here~'
                            maxLength='255'
                            
                        />
                    </div>
                    <button onSubmit={handleSubmit} />
                </form>
            </Card>
            <div className='blog-card'></div>
        </div>
    )
}

export default Blog
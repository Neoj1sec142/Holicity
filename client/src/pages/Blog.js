import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { CreateBlog } from '../services/BlogServices'

const Blog = (props) => {

    const navigate = useNavigate()
    const [blog, setBlog] = useState({
        type: '',
        thoughts: '',
        url: ''
    })

    const allTypes = [
        '----------------------------',
        'Recipe',
        'Recyclable Alternative',
        'Wildlife',
        'Natural Health',
        'Fitness',
        'Gas Alternatives',
        'Green House Effect'
    ]

    const handleType = (e) => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }
    const handleChange = (e) => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreateBlog(props.user.id, blog)
        navigate('/blog')
    }

    return(
        <div className='blog'>
            <div className='create-blog'>
                <form className='card-overlay centered' onSubmit={handleSubmit}>
                    <div className='create-blog type'>
                        <label htmlFor='type'></label>
                        <select onChange={(e) => handleType(e)} value={blog.type} name='type' id='type'>
                            {allTypes.map((type, i) => (
                                <option key={i} name='type' required>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='create-blog input'>
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
                            required
                        />
                    </div>
                </form>
            </div>
            <div className='blog-card'></div>
        </div>
    )
}

export default Blog
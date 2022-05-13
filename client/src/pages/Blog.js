import React, { useState, useEffect } from 'react'
import { CreateBlog, GetBlogs, GetBlogByType } from '../services/BlogServices'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogMenu from '../components/BlogMenu'
import {blogItems} from '../components/blogItems'
import BlogCard from '../components/BlogCard'
import { allTypes } from '../components/allTypes'

const Blog = (props) => {
    
    const [blogPost, setBlogPost] = useState([])
    const [selection, setSelection] = useState("")
    const [showBlog, setShowBlog] = useState([])
    const [blog, setBlog] = useState({
        type: '',
        thoughts: '',
        url: ''
    })
   
    useEffect(() => {
        const getData = async () => {
            const data = await GetBlogs()
            setBlogPost(data)
        }
        getData()
    }, [])

    useEffect(() => {
        if(selection !== ''){
            const getType = async() => {
                const res = await GetBlogByType(selection)
                setShowBlog(res) 
                setSelection('')
            }
            getType(selection)
        }
    }, [selection])

    

    const handleType = (e) => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }

    const handleChange = (e) => {
        setBlog({...blog,[e.target.name]: e.target.value})
    }
   
    const handleSubmit = (e) => {
        const user_id = props.user.id
        console.log(user_id)
        e.preventDefault()
        CreateBlog(user_id, blog)
        window.location.reload(true)
    }

    const handleBlog = (e) => {        
        setSelection(e.target.name)
    }

    
    return(
        <div className='blog'>
            <Card className="position-absolute top-50 start-50 translate-middle" style={{ padding: '20px', maxWidth: '60%'}}>
                <form className='card-overlay centered' onSubmit={(e) => handleSubmit(e)}>
                    <div className='d-flex justify-content-center' style={{paddingBottom: '15px'}}>
                        <h2>Topic:</h2>
                        <label htmlFor='type'></label>
                        <select onChange={(e) => handleType(e)} value={blog.type} name='type' id='type'>
                            
                            {allTypes.map((type, i) => (
                                <option key={i} name='type' onChange={(e) => handleChange(e)} required>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='' style={{paddingBottom: '15px'}}>
                    <h4>~ Share your Thoughts ~</h4>
                        <input 
                            onChange={(e) => handleChange(e)}
                            type='text'
                            value={blog.thoughts}
                            name='thoughts'
                            placeholder='~Share your thoughts~'
                            maxLength='255'
                            required
                        />
                        <h4>~ Add a Link ~</h4>
                        <input 
                            onChange={(e) => handleChange(e)}
                            type='text'
                            value={blog.url}
                            name='url'
                            placeholder='~Links Here~'
                            maxLength='255'
                            
                        />
                    </div>
                    <button  />
                </form >
            </Card >
            <div className='d-flex justify-content-center' style={{marginTop: '40em', maxWidth: '60%'}}>
                {blogItems.map((menu, index) => (
                    <BlogMenu  items={menu} key={index} handleBlog={handleBlog} />
                ))}
                <div style={{marginTop: '2em'}}>
                    {showBlog.length ?
                    showBlog.map((blog, i) => (
                    <BlogCard key={i} blog={blog}/>))
                    :   blogPost.map((blog, i) => (
                        <BlogCard key={i} blog={blog} user={props.user}/>))
                    }
                </div>  
                
            </div>
        </div>
    )
}

export default Blog
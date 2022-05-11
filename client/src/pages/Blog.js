import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { CreateBlog, GetBlogs, GetBlogByType } from '../services/BlogServices'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogMenu from '../components/BlogMenu'
import {blogItems} from '../components/blogItems'


const Blog = (props) => {

    const user_id = useParams()
    // console.log(props.user.id, "PROPS")
    const [blogPost, setBlogPost] = useState([])
    const [selection, setSelection] = useState("")
    const [showBlog, setShowBlog] = useState([])
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

    useEffect(() => {
        const getType = async() => {
            const res = await GetBlogByType(selection)
            setShowBlog(res) 
            console.log(res, "RESOLUTION")
        }
        getType(selection)
    }, [selection])

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
        // console.log(selection, "SELLLL")
    }

    // window.top.location.reload(false)
    console.log(blog, "BLOGGGGGG")
    return(
        <div className='blog'>
            <Card className="position-absolute top-50 start-50 translate-middle" style={{ padding: '20px', maxWidth: '500px'}}>
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
            </Card>
            <div className='blog-card' style={{marginTop: '23em'}}>
                <h1>YO</h1>
                {blogItems.map((menu, index) => (
                    <BlogMenu  items={menu} key={index} handleBlog={handleBlog} />
                ))}
                    {/* <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Blogs</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className='dropdown-item'>Link</a></li>
                    </ul> */}
                
            </div>
        </div>
    )
}

export default Blog
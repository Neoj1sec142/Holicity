import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import BlogComm from '../components/BlogComm'

const BlogDetail = () => {
    const [blog, setBlog] = useState({})
    const [toggleBc, setToggleBc] = useState(false)
    const [blogComm, setBlogcomm] = useState([])

    const {blog_id} = useParams()
    return (
        <div></div>
    )
}

export default BlogDetail
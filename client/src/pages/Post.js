import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CreatePost} from '../services/PostServices'


const Post = (props) => {
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: '',
        image: '',
        description: '',
        url: ''
    })

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreatePost(props.user.id, post)
        navigate('/feed')
    }

    return(
        <div></div>
    )
}

export default Post
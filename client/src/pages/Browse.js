import React, { useState, useEffect } from 'react'
import { GetPosts } from '../services/PostServices'


const Browse = () => {
    const [query, setQuery] = useState('')
    const [browsed, setBrowsed] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const posts = await GetPosts()
            setPosts(posts)
        }
        getPosts()
    }, [])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = async (e) => {
        const res = posts.filter((item) => item.type.toLowerCase().includes(browsed.toLowerCase()))
        setBrowsed(res)
    }

    return(
        <div className='browse'>
            <form onSubmit={handleSubmit}>
                <input 
                    className='browse-form'
                    onChange={(e) => handleChange(e)}
                    value={query}
                    maxLength='255'
                    name='posts'
                    placeholder="Browse the Energy.."
                />
            </form>


        </div>
    )
}

export default Browse
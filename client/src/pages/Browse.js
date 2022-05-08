import React, { useState, useEffect } from 'react'
import { GetPosts, GetPostByType } from '../services/PostServices'


const Browse = () => {
    const [query, setQuery] = useState('')
    const [browsed, setBrowsed] = useState([])
    const [posts, setPosts] = useState([])
    const [selectedTy, setSelectedTy] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const posts = await GetPosts()
            setPosts(posts)

        }
        if(browsed){
            const getTypes = async () => {
                const type = GetPostByType(browsed)
                setSelectedTy(type)
                console.log(type, "TYPE")
            }
            getTypes()
        }
        getPosts()
        
    }, [])

    const allTypes = [
        'Recipe',
        'Recyclable Alternative',
        'Wildlife',
        'Natural Health',
        'Fitness',
        'Gas Alternatives',
        'Green House Effect'
    ]

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = async (e) => {
        const res = posts.filter((item) => item.type.toLowerCase().includes(browsed.toLowerCase()))
        setBrowsed(res)
    }
    console.log(posts, "POSTS")
    if(posts){
        return(
            <div className='browse'>
                <form >
                    <input 
                        className='browse-form'
                        onChange={(e) => handleChange(e)}
                        value={query}
                        maxLength='255'
                        name='posts'
                        placeholder="Browse the Energy.."
                    />
                    <button onSubmit={handleSubmit}/>
                </form>
                {!browsed ? 
                    <div>Search Res</div>
                    :
                    <div>
                        <h2>Check The Energy in the Room</h2>
                        <ul>
                        {allTypes.map((post, i) => (
                            <li key={i}>{post}</li>
                        ))}
                        </ul> 
                    </div>
                }


            </div>
        )
    }
}

export default Browse
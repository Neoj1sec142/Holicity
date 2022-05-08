import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CreatePost} from '../services/PostServices'


const Create = (props) => {
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: '',
        type: '',
        image: '',
        description: '',
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

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const handleSelect = (e) => {
        console.log(e.target.value)
        setPost({...post, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreatePost(props.user.id, post)
        navigate('/feed')
    }

    return(
        <div className='create'>
            <form className='card-overlay centered' onSubmit={handleSubmit}>
                <h3>~ Spread the Energy ~</h3>
                <div className='input-wrapper'>
                    <h4>~ Name your Vibe ~</h4>
                    <input 
                        onChange={handleChange}
                        type='text'
                        value={post.title}
                        name='title'
                        placeholder='~Name Goes Here~'
                        maxLength='255'
                        required
                    />
                </div>
                <div className='input-wrapper'>
                    <h4>~ What is your Vibe ~</h4>
                    <div>
                        <label htmlFor='type'></label>
                        <select onChange={(e) => handleSelect(e)} value={post.type} name='type' id='type'>
                            {allTypes.map((type, i) => (
                                <option key={i} name='type'>{type}</option>
                            ))}
                            
                        </select>
                    </div>
                </div>
                <div className='input-wrapper'>
                    <h4>~ Share a Pic ~</h4>
                    <textarea 
                        onChange={handleChange}
                        type='url'
                        value={post.image}
                        name='image'
                        placeholder='~Pic Goes Here~'
                        maxLength='255'
                    />
                </div>
                <div className='input-wrapper'>
                    <h4>~ Pass on Wisdom ~</h4>
                    <textarea 
                        onChange={handleChange}
                        type='text'
                        value={post.description}
                        name='description'
                        placeholder='~Wisdom Goes Here~'
                        maxLength='255'
                    />
                </div>
                <div className='input-wrapper'>
                    <h4>~ Link ~</h4>
                    <input 
                        onChange={handleChange}
                        type='url'
                        value={post.url}
                        name='url'
                        placeholder='~Links Goes Here~'
                        maxLength='255'
                    />
                </div>
                <div className='input-wrapper center'>
                    <button type='submit'>Vibe</button>
                </div>
            </form>
        </div>
    )
}

export default Create
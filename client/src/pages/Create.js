import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CreatePost} from '../services/PostServices'
import {Card} from 'react-bootstrap'

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
           <Card className="position-absolute top-50 start-50 translate-middle" style={{ padding: '20px', maxWidth: '500px'}}>
            <form className='card-overlay centered' onSubmit={handleSubmit}>
                <h3 className='d-flex justify-content-center' style={{paddingBottom: '15px'}}>~ Spread the Energy ~</h3>
                <div className='d-flex justify-content-center' style={{paddingBottom: '15px'}}>
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
                <div className=''>
                    
                    <div className='d-flex  align-items-center'>
                        <h4 className='' style={{paddingTop: '5px'}}>~ Type: ~</h4>
                        <label htmlFor='type'></label>
                        <select onChange={(e) => handleSelect(e)} value={post.type} name='type' id='type'>
                            {allTypes.map((type, i) => (
                                <option key={i} name='type' required>{type}</option>
                            ))}
                            
                        </select>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center' style={{padding: '10px'}}>
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
                <div className='d-flex justify-content-center align-items-center' style={{padding: '10px'}}>
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
                <div className='d-flex justify-content-center align-items-center' style={{padding: '10px'}}>
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
                <div className='d-flex justify-content-center'>
                    <button type='submit' className='btn btn-outline-primary'>Vibe</button>
                </div>
            </form>
            </Card> 
        </div>
    )
}

export default Create
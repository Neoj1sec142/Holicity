import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { AllUsersWFollowers } from '../services/UserServices'
import {Card} from 'react-bootstrap'

const Search = (props) => {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const all =  await AllUsersWFollowers()
            setUsers(all)
        }
        getUsers()
    }, [])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const res = users.filter((item) => item.username.toLowerCase().includes(query.toLowerCase()))
        setSearch(res)
        console.log("RES", res)
    }   
    if (users.length){
        return(
            <div className='search'>
                <form onSubmit={handleSubmit}>
                    <input 
                        className='position-absolute top-20 start-50 translate-middle'
                        onChange={(e) => handleChange(e)}
                        value={query}
                        maxLength='255'
                        name='username'
                        placeholder='Search Friends..'
                        style={{maxWidth: '60%', marginTop: '3em'}}
                    />
                </form>
                <div>
                    {search.map((res, i) => (
                        <div key={i} style={{flexDirection: 'column', marginTop: '8em'}} className='d-flex justify-content-center'>
                            <h2 className='d-flex justify-content-center' style={{marginBottom: '50px'}}>Search Results</h2>
                            <Card style={{maxWidth: '60%', padding: '10px', maxHeight: '90px'}} className='d-flex justify-content-center start-50 translate-middle'>
                            <div className='d-flex justify-content-center' >
                                {res.profileImg ?
                                    <img className='profile-img-container' src={`${res.profileImg}`} style={{maxWidth: '80px'}} alt='text'></img>
                                    :
                                    <img className='profile-img-container' src='../assets/no_img.jpeg' style={{maxWidth: '80px'}} alt='text'></img>
                                }
                                <div className='profile-info-container'>
                                    <h2><Link to={`/profile/${res.id}`}>{res.username}</Link></h2>
                                    <div>
                                        <span>Followers: {res.followers.length}</span>
                                        <span>Following: {res.following.length}</span>
                                    </div>
                                </div>
                            </div>
                            </Card>
                        </div>
                    ))}
                    {!search.length ?  
                    <div style={{marginTop: '5em', flexDirection: 'column'}} className='d-flex justify-content-center '>
                        <h2 className='d-flex justify-content-center'> All Users</h2> 
                        <Card style={{maxWidth: '60%', padding: '10px', maxHeight: '90px'}} className='d-flex justify-content-center start-50 translate-middle'>
                        {users.map((user, i) => (
                        <div className='d-flex justify-content-center align-items-center' key={i}>
                            {user.profileImg 
                            ?   <img className='img-thumbnail'  src={`${user.profileImg}`} style={{maxWidth: '80px'}} alt='text'></img> 
                            :   <img className='img-thumbnail' src='../assets/no_img.jpeg' alt='text'></img>
                        }
                        <div className='profile-info-container'>
                        <h2><Link to={`/profile/${user.id}`}>{user.username}</Link></h2>
                                    <div>
                                        <span> Followers: {user.followers.length} </span> 
                                        <span> Following: {user.following.length} </span>
                                    </div>
                        </div>
                        </div>
                        
                    ))}
                    </Card>
                    </div>
                    
                : <div></div> 
            }
                </div>
            </div>
        )
    } else{
        return(<div>Hold Tight....</div>)
    }
}

export default Search
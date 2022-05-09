import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { AllUsersWFollowers } from '../services/UserServices'

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
                        className='search-form'
                        onChange={(e) => handleChange(e)}
                        value={query}
                        maxLength='255'
                        name='username'
                        placeholder='Search Friends..'
                    />
                </form>
                <div className="">
                    {search.map((res, i) => (
                        <div key={i}>
                            <h2>Search Results</h2>
                            <div className='profile-info'>
                                {res.profileImg ?
                                    <div className='profile-img-container' style={{backgroundImage: `url(${res.profileImg})`}}></div>
                                    :
                                    <div className='profile-img-container'></div>
                                }
                                <div className='profile-info-container'>
                                    <h2><Link to={`/profile/${res.id}`}>{res.username}</Link></h2>
                                    <div>
                                        <span>Followers: {res.followers.length}</span>
                                        <span>Following: {res.following.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!search.length ?  
                    <div>
                        <h2> All Users</h2> 
                        {users.map((user, i) => (
                        <div className='profile-info' key={i}>
                            {user.profileImg 
                            ?   <div className='profile-img-container' style={{backgroundImage:`url(${user.profileImg})`}}></div> 
                            :   <div className='profile-img-container'></div>
                        }
                        <div className='profile-info-container'>
                        <h2><Link to={`/profile/${user.username}`}>{user.username}</Link></h2>
                                    <div>
                                        <span> Followers: {user.followers.length} </span> 
                                        <span> Following: {user.following.length} </span>
                                    </div>
                        </div>
                        </div>
                    ))}
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
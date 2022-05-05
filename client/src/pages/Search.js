import React, {useState, useEffect} from 'react'
import { GetUsers } from '../services/UserServices'

const Search = () => {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getUsers = async () => {
            const all =  await GetUsers()
            setUsers(all)
        }
        getUsers()
    }, [])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const res = users.filter((item) => item.username.toLowerCase().includes(search.toLowerCase()))
        setSearch(res)
        console.log("RES", res)
    }   

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
        </div>
    )
}

export default Search
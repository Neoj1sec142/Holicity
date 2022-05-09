import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { GetUserDetail, UpdateProfile } from '../services/UserServices'



const ProfileUpdate = (props) => {
     
  const [userDetails, setUserDetails] = useState({})
    
  useEffect(() => {
      if(props.user){
          const getUserData = async () => {
              const data = await GetUserDetail(props.user.id)                
              setUserDetails(data)
          }
          getUserData()
      }
  }, [props.user])

  const navigate = useNavigate()

  const handleChange = (e) => {
      setUserDetails({...userDetails, [e.target.name]: e.target.value}) 
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      await UpdateProfile(props.user.id, userDetails) 
      navigate(`/profile/${props.user.id}`)
  }

    if (userDetails.id) {
      return(
        <form className='profile-update-container card-overlay centered' onSubmit={handleSubmit}>
          <h3>Update Profile</h3>
          
          <div className='profile-update-pic'>
            {userDetails.profileImg ? 
              <img src={userDetails.profileImg} style={{maxWidth:'100px'}} alt='profile_img' />
              : "No image"
            }
            </div>
            <div className='input-wrapper'>
            <label htmlFor='profileImg'>Profile picture (Url): </label>
            <input 
              onChange={handleChange}
              type='url' 
              value={userDetails.profileImg} 
              name='profileImg' 
              maxLength='255'/>            
          </div>

          <div className='input-wrapper'>
            <label htmlFor='fullname'>Full name: </label>
            <input 
              onChange={handleChange}
              type='text' 
              value={userDetails.fullname} 
              name='fullname' 
              maxLength='255'
              required 
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='email'>Email: </label>
            <input 
              onChange={handleChange}
              type='email' 
              value={userDetails.email} 
              name='email' 
              maxLength='255'/>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='profileDescription'>About You: </label>
            <br />
            <textarea 
              onChange={handleChange}
              value={userDetails.profileDescription} 
              name='profileDescription' 
            />
          </div>

          <button type='submit'>Save</button>
        </form> 
      )
    } else {
        return (
            <div className='loading'>Loading...</div>
        )
    }  
  }
  export default ProfileUpdate
  
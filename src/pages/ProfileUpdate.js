import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { GetUserDetail, UpdateProfile } from '../services/UserServices'
import {Card} from 'react-bootstrap'



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
        <Card className='position-absolute top-50 start-50 translate-middle'
              style={{maxWidth: '60%', marginTop: '5em'}}>
        <form  onSubmit={handleSubmit}>
          <h3 style={{textAlign: 'center'}}>Update Profile</h3>
          
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
              placeholder='Profile Picture Url Here'
              maxLength='255'/>            
          </div>

          <div className='input-wrapper'>
            <label htmlFor='fullname'>Full name: </label>
            <input 
              onChange={handleChange}
              type='text' 
              value={userDetails.fullname} 
              name='fullname'
              placeholder='Profile Username Here' 
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
            <label htmlFor='bio'>About You: </label>
            <br />
            <textarea 
              onChange={handleChange}
              value={userDetails.bio} 
              name='bio' 
            />
          </div>
          <button type='submit'>Save</button>
        </form> 
        </Card>
      )
    } else {
        return (
            <div className='loading'>Loading...</div>
        )
    }  
  }
  export default ProfileUpdate
  
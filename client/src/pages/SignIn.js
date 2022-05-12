import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'

const SignIn = (props) => {

  let navigate = useNavigate()
  
  const [user, setUser] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(user)

    console.log("handleSubmit PAYLOAD", payload)
    
    props.setUser(payload)
    props.toggleAuthenticated(true)
    setUser({ username: '', password: '' })
    navigate('/feed')
  }

  return (
    <div className="home" style={{maxWidth: '70%'}}>
      <Card className="position-absolute top-50 start-50 translate-middle" style={{ padding: '20px', maxWidth: '500px'}}>
        <form className="col" onSubmit={handleSubmit} >
          <div className="d-flex justify-content-center">
            <label htmlFor="username">Username:</label>
            <input
              onChange={handleChange}
              name="username"
              type="username"
              placeholder="Username.."
              value={user.username}
              maxLength='255'
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="*********"
              value={user.password}
              maxLength='255'
              required
            />
          </div>
          <button disabled={!user.username || !user.password}>
            Sign In
          </button>
          <Card.Text>Dont Have an Account? <Link to={'/register'}>Click Here to Register</Link></Card.Text>
        </form>
      </Card>
    </div>
  )
}

export default SignIn
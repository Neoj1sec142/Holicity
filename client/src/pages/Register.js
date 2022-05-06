import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'



const Register = () => {
  let navigate = useNavigate()
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      fullname: newUser.fullname,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    setNewUser({
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <div className="home-container col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="fullname">Full Name</label>
            <input
              onChange={handleChange}
              name="fullname"
              type="text"
              placeholder="Full Name.."
              value={newUser.fullname}
              maxlength='255'
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="username"
              placeholder="Username.."
              value={newUser.username}
              maxlength='25'
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email@email.com"
              value={newUser.email}
              maxlength='255'
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="************"
              value={newUser.password}
              maxlength='255'
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="************"
              value={newUser.confirmPassword}
              maxlength='255'
              required
            />
          </div>
          <button
            disabled={
              !newUser.email ||
              (!newUser.password &&
                newUser.confirmPassword === newUser.password)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register

import { Link, useNavigate } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      
      <section className='burger-menu'>
        <nav id='navbar' className='navbar' role='navigation'>
          <input id='toggle' type='checkbox' htmlFor="toggle"/>
          <h3>Logged in as {user.username}!</h3>
          <label className='hamburger'>
            <div className='head'></div>
            <div className='body'></div>
            <div className='feet'></div>
          </label>
            <nav className='menu'>
              <Link className='links' to="/feed">Feed</Link>
              <Link className='links' to={`/profile/${user.username}`}>Profile</Link>
              <Link className='links' to="/create">Create</Link>
              <Link className='links' to="/search">Search</Link>
              <Link className='links' onClick={handleLogOut} to="/">
                Sign Out
              </Link>
            </nav>
        </nav>
      </section>
      
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  const navigate = useNavigate()
  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://avatars.dicebear.com/api/jdenticon/app.svg"
            alt="welcome banner"
          />
        </div>
      </Link>
      <div className="Holicity-header" onClick={() => {
          (authenticated && user ? navigate('/feed') : navigate('/signin'))}}>
          <h1>Holicity</h1> 
        </div>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav

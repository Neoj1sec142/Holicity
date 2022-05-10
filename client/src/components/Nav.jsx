import { Link, useNavigate } from 'react-router-dom'
import { menuItems } from "./menuItem";
import MenuItems from './MenuItems'

const Nav = ({ authenticated, user, handleLogOut, props }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      
      <section className='navbar navbar-expand-xl navbar-dark bg-dark fixed-bottom'>
        <nav id='navbar' className='d-flex flex-row justify-content-around' role='navigation'>
          <h3>Logged in as {user.username}!</h3>
            <nav className='menu'>
              <ul className="menus">
                {/* <Link className='links' to="/feed">Feed</Link>
                <Link className='links' to="/browse">Browse</Link>
                <Link className='links' to={`/profile/${user.username}`}>Profile</Link>
                <Link className='links' to="/create">Create</Link>
                <Link className='links' to="/search">Search</Link> */}
                <Link className='links' onClick={handleLogOut} to="/">
                  Sign Out
                </Link>
                <Link to="/">
                  <div className="d-flex flex-end" alt="logo">
                    <img
                      style={{maxWidth: '40px'}}
                      className="position-right"
                      src="https://avatars.dicebear.com/api/jdenticon/app.svg"
                      alt="welcome banner"
                    />
                  </div>
                </Link>
              </ul>
            </nav>
        </nav>
      </section>
      
    )
  }

  const publicOptions = (
    <nav className='d-flex justify-content-around'>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  const navigate = useNavigate()
  return (
    <header>
      <nav>
      {authenticated && user ?
        <ul className="menus justify-content-around fixed-top">
          {menuItems.map((menu, index) => {
          return (
            <MenuItems items={menu} key={index} user={user}/>
            );
          })}
        </ul>
        :
        <div></div>
      }
      </nav>
      <div className="top" onClick={() => {
          (authenticated && user ? navigate('/feed') : navigate('/signin'))}}> 
        </div>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav

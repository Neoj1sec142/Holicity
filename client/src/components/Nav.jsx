import { Link, useNavigate } from 'react-router-dom'
import { menuItems } from "../menu/menuItem";
import MenuItems from '../menu/MenuItems'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      
      <section className='burger-menu'>
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
              </ul>
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
      <nav>
      {authenticated && user ?
        <ul className="menus justify-content-around">
          {menuItems.map((menu, index) => {
          return (
            <MenuItems items={menu} key={index} />
            );
          })}
        </ul>
        :
        <div></div>
      }
      </nav>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://avatars.dicebear.com/api/jdenticon/app.svg"
            alt="welcome banner"
          />
        </div>
      </Link>
      <div className="top" onClick={() => {
          (authenticated && user ? navigate('/feed') : navigate('/signin'))}}> 
        </div>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav

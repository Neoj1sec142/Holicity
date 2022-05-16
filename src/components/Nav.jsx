import { Link, useNavigate } from 'react-router-dom'
import { menuItems } from "./menuItem";
import MenuItems from './MenuItems'
import logo from '../assets/hol-logo.png'

const Nav = ({ authenticated, user, handleLogOut, props }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      
      <section className='navbar navbar-expand-xl navbar-dark bg-dark fixed-bottom'>
        <nav id='navbar' className='d-flex flex-row justify-content-around' role='navigation'>
          
          <h3>Logged in as </h3>
            <nav className='menu'>
              <ul className="menus" >
                <li style={{color: 'white'}}>Logged in as: {user.username}!</li>
                <Link className='links' onClick={handleLogOut} to="/">
                  Sign Out
                </Link>
                <Link to="/">
                  <div className="d-flex flex-end" alt="logo">
                    <img src={logo} alt='no_img' style={{maxWidth: '120px', opacity: '60%'}} />
                  </div>
                </Link>
              </ul>
            </nav>
        </nav>
      </section>
    )
  }

  const publicOptions = (
    <nav className='d-flex justify-content-start' style={{marginLeft: '2em', marginTop: '1em'}}>
      {/* <Link to="/">Home</Link> */}
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

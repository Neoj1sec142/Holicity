import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from "./services/Auth";
import Nav from './components/Nav'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Create from './pages/Create'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import Details from './pages/Details'
//import Settings from './components/Settings.jsx'
import './styles/App.css';
import Browse from './pages/Browse';


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </div>
      <div className='app_main'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/feed"
            element={<Feed user={user} authenticated={authenticated} />}
          />
          <Route path="/profile/:username"
            element={<Profile user={user} authenticated={authenticated} />}
          />
          <Route path="/details/:post_id"
            element={<Details user={user} authenticated={authenticated} />}
          />
          {/* <Route path="/profile/:username/update"
            element={<Settings user={user} authenticated={authenticated} />}
          /> */}
          <Route path="/create"
            element={<Create user={user} authenticated={authenticated} />}
          />
          <Route path="/search"
            element={<Search user={user} authenticated={authenticated} />}
          />
          <Route path="/browse"
            element={<Browse user={user} authenticated={authenticated} />}
          />
        </Routes>
        
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

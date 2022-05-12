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
import ProfileUpdate from './pages/ProfileUpdate'
import Footer from './components/Footer'
import Details from './pages/Details'
import Settings from './pages/Settings'
import Browse from './pages/Browse';
import Blog from './pages/Blog';
import News from './pages/News'
import Messenger from './pages/Messenger'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/menu.css'
import hbackground from './assets/world_in_hand.jpeg'



function App(props) {
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
      <header>
        <div className="nav-area">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
        </div>
      </header>
      
      <div className='app_main'>
        <div className='d-flex flex-column min-vh-100'>
          <Routes>
              <Route path="/" element={<Home />}  />
            <Route
              path="/signin"
              className="home"
              element={
                <SignIn
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
            <Route path="/register" element={<Register />} className="home"/>
            <Route path="/feed"
              element={<Feed user={user} authenticated={authenticated} />}
            />
            <Route path="/profile/:username"
              element={<Profile user={user} authenticated={authenticated} />}
            />
            <Route path="/blog"
              element={<Blog user={user} authenticated={authenticated} />}
            />
            <Route path="/details/:post_id"
              element={<Details user={user} authenticated={authenticated} />}
            />
            <Route path="/profile/:id/update"
              element={<ProfileUpdate user={user} authenticated={authenticated} />}
            />
            <Route path="/create"
              element={<Create user={user} authenticated={authenticated} />}
            />
            <Route path="/search"
              element={<Search user={user} authenticated={authenticated} />}
            />
            <Route path="/browse"
              element={<Browse user={user} authenticated={authenticated} />}
            />
            <Route path="/news"
              element={<News user={user} authenticated={authenticated} />}
            />
            <Route path="/settings"
              element={<Settings user={user} authenticated={authenticated} />}
            />
            <Route path="/messenger"
              element={<Messenger user={user} authenticated={authenticated} />}
            />
          </Routes>
        </div>
      </div>
      <footer className='mt-auto'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

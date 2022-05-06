import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <div className="welcome-card col card-overlay">
        <h2 id='login-description'>~ Greener Earth Starts Here ~</h2>
          <section className="welcome-signin">
          <button onClick={() => navigate('/signin')}>
            ~ Enter ~ 
          </button>
        </section>
      </div>
    </div>
  )
}

export default Home
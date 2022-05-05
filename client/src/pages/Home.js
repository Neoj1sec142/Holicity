import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <div className="welcome-card col card-overlay">
        <div className="Holicity-header"><h1>Holicity</h1></div>
        <h2 id='login-description'> Welcome to Holicity! Click below to log in.</h2>

        <section className="welcome-signin">
          <button onClick={() => navigate('/signin')}>
            Click Here To Sign In 
          </button>
        </section>
      </div>
    </div>
  )
}

export default Home
import { useNavigate } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import logo from '../assets/hol-logo.png'

const Home = () => {
  
  let navigate = useNavigate()

  return (
    
    <div className="d-flex justify-content-center" >
      <img src={logo} alt='home' className="home-logo"/>
      <Card className="position-absolute top-50 start-50 translate-middle" style={{maxWidth: '70%', padding: '30px', opacity: '85%'}}>
        <Card.Title className='glow'>~ Greener Earth Starts Here ~</Card.Title>
        <Card.Body>
          <section className="d-flex justify-content-center">
          <button onClick={() => navigate('/signin')} style={{maxWidth: '100px'}}
          className='btn btn-outline-primary' >
            ~ Enter ~ 
          </button>
        </section>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home
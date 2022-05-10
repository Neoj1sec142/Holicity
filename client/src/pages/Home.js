import { useNavigate } from 'react-router-dom'
import {Card} from 'react-bootstrap'
const Home = () => {
  
  let navigate = useNavigate()

  return (
    <div className="d-flex justify-content-center">
      <Card className="" style={{maxWidth: '70%' }}>
        <Card.Title className='d-flex justify-content-center'>~ Greener Earth Starts Here ~</Card.Title>
        <Card.Body>
          <section className="d-flex justify-content-center">
          <button onClick={() => navigate('/signin')} style={{maxWidth: '100px'}}
          className='btn btn-outline-primary'>
            ~ Enter ~ 
          </button>
        </section>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home

import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Settings = (props) => {
    
    const navigate = useNavigate()

    if(props.user){
        return (
            <div>
                <Card style={{textAlign: 'center'}}>
                    <Card.Title style={{textDecoration: 'underline'}}>Settings and Links:</Card.Title>
                    <></>
                    <Card.Text>Landing Options:</Card.Text>
                    <Card.Link onClick={() => navigate('/')}>Home Page</Card.Link>
                    <Card.Link onClick={() => navigate('/register')}>Register for an Account</Card.Link>
                    <Card.Link onClick={() => navigate('/signin')}>Log In Page</Card.Link>
                    <></>
                    <Card.Text>Getting Started:</Card.Text>
                    <Card.Link onClick={() => navigate('/search')}>Getting Started</Card.Link>
                    <Card.Link onClick={() => navigate('/search')}>Search for Friends</Card.Link>
                    <Card.Link onClick={() => navigate('/news')}>Global News</Card.Link>
                    <></>
                    <Card.Text>Creation Links:</Card.Text>
                    <Card.Link onClick={() => navigate('/blog')}>Share Your Thoughts</Card.Link>
                    <Card.Link onClick={() => navigate('/create')}>Create Your Own Vibe</Card.Link>
                    <Card.Link onClick={() => navigate('/feed')}>Check The Recent Vibes Feed</Card.Link>
                    <></>
                    <Card.Text>About Holicity:</Card.Text>
                    <Card.Link onClick={() => navigate('/blog')}>About</Card.Link>
                    <a href="http://neo_portfolio_142.surge.sh" target={"_blank"} rel="noreferrer">Contact Holicity</a>
                </Card>
            </div>
        )
    }
}
export default Settings
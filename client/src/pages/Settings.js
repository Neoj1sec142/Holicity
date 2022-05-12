// import React, { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Settings = (props) => {
    // const userId = props.user.id
    const navigate = useNavigate()

    if(props.user){
        return (
            <div>
                <Card>
                    <Card.Title>Settings and Links:</Card.Title>
                    <></>
                    <Card.Text>Landing Options:</Card.Text>
                    <Card.Link onClick={() => navigate('/')}>Home Page</Card.Link>
                    <Card.Link onClick={() => navigate('/register')}>Register for an Account</Card.Link>
                    <Card.Link onClick={() => navigate('/signin')}>Log In Page</Card.Link>
                    <></>
                    <Card.Text>Getting Started:</Card.Text>
                    <Card.Link onClick={() => navigate('/search')}>Search for Friends</Card.Link>
                    <Card.Link onClick={() => navigate('/browse')}>Browse the Vibes</Card.Link>
                    <Card.Link onClick={() => navigate('/news')}>Global News</Card.Link>
                    <Card.Link onClick={() => navigate('/search')}>Getting Started</Card.Link>
                </Card>
            </div>
        )
    }
}
export default Settings
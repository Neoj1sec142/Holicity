import {GetNews} from '../services/OutsideServices'
import React, { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'
const News = (props) => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            
            const res = await GetNews()
            
            setNews(res.data)
        }
        getNews()
    },[])
    
    
    if(news && props.user){
        return(
            
            <div className='d-flex justify-content-center' style={{marginTop: '5em'}}>
                <Card style={{maxWidth: '60%'}}>
                    <Card.Title style={{textAlign: 'center'}}>Top Global News:</Card.Title>
                    {news.map((value, i) => (
                    <Card key={i} className='d-flex justify-content-center'>
                        <Card.Title>{value.title}</Card.Title>
                        <img src={`${value.image_url}`} alt='text' target='_blank' style={{maxWidth: '40%', margin: '0 auto'}}/>
                        <Card.Text>{value.description}</Card.Text>
                        <a href={`${value.url}`} target='_blank' rel="noreferrer" >Read More...</a>
                    </Card>
                    ))}
                </Card>
            </div>
            
        )
    } else {
        return(<div>Loading.....</div>)
    }
}

export default News
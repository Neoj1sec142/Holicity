import {Card} from 'react-bootstrap'
import {GetUserDetail} from '../services/UserServices'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const Getting = () => {
    const [proUser, setProUser] = useState({})
    const params = useParams()
    // console.log(props, "PROPS")
    // const user_id = parseInt(props.user.id)
    const {user_id} = params
    // const user = props.user.id
    useEffect(() => {
        if(!isNaN(user_id)){
            const getUser = async () => {
                const data = await GetUserDetail(user_id)
                setProUser(data)
            }
            getUser()
        }
        
    },[user_id])
    if(proUser){
        return(
            <Card style={{maxWidth: '60%', marginTop: '5em', textAlign: 'center'}} className="position-absolute top-50 start-50 translate-middle">
                {proUser 
                ?   <Card.Title>~ Welcome to our family {proUser.username}! ~</Card.Title>
                :   <Card.Title>~ Welcome to our family! ~</Card.Title>}
                <Card.Text>
                    You just being here gives the world hope. Holicity is a social platform for people 
                    to commune and reminsce about hacks, tips, tricks, and any ways possible that we can
                    contribute to helping restore the health of our home. As with being a site thats built 
                    for improvement, there is a type of post or blog you may choose to use to suggest ways
                    to improve the app. Any and all suggestions are appreciated as we wish to make the app
                    as easily accessable and readliy avaliable to any and all-comers. So please feel free
                    to let me know what you would like to see... It is a site you use after all...
                </Card.Text>
                <Card.Text>
                    Getting started is simple once you have an account you are free to browse the 
                    vibes, create your own vibes, browse other's thoughts and blogs as well as share your own,
                    search for friends and followers and stay connected, check the news or even check out our 
                    messenger... The world is yours... be nice to it.. 
                </Card.Text>
            </Card>
        )
    }
}
export default Getting
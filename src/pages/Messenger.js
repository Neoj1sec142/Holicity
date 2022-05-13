import {Card} from 'react-bootstrap'

const Messenger = () => {
    return(
        <Card className='position-absolute top-50 start-50 translate-middle' style={{maxWidth: '60%'}}>
            <iframe src='http://localhost:3003' 
                style={{width: '300px', height: '300px'}}
                className='d-flex justify-content-center align-items-center'
                title='messenger'></iframe>
        </Card>
    )
}
export default Messenger
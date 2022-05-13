import ReactStars from 'react-stars'
import {Card} from 'react-bootstrap'

const BlogComm = ({rating, blogcomm, commentor}) => {

    return (
        <div className='comment-wrapper'>
            <Card className='d-flex align-items-center' style={{padding: '10px', flexDirection: 'row'}}>
                <h5>Comment By: {commentor}</h5>
                <Card.Text className='d-flex justify-content-center' style={{paddingTop: '8px'}}>{blogcomm}</Card.Text>
                <ReactStars className='d-flex justify-content-center' value={rating} edit={false} size={24} style={{flexDirection: 'row'}} color2={'#ffd700'} />
            </Card>
        </div>
    )
}

export default BlogComm
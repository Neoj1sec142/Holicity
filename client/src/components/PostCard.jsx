import { useNavigate } from 'react-router-dom'
import { Card} from 'react-bootstrap'
const PostCard = ({post}) => {
const navigate = useNavigate();

    return (
        <div className='post-card-container' key={post.id} onClick={() => navigate(`/details/${post.id}`)}>
            <Card>
                <h3 className='btn btn-outline-warning'>{post.title}</h3>
                <div className='post-card-img' style={{backgroundImage:`url(${post.image})`}}></div>
            </Card>
        </div>
    )
}

export default PostCard
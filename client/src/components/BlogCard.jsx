import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const BlogCard = ({blog}) => {
const navigate = useNavigate();

    return (
        <div className='post-card-container' key={blog.id} onClick={() => navigate(`/details/${blog.id}`)}>
            <Card>
                <h3>{blog.title}</h3>
                {/* <div className='post-card-img' style={{backgroundImage:`url(${post.image})`}}></div> */}
                <Card.Text>{blog.description}</Card.Text>
            </Card>
        </div>
    )
}

export default BlogCard
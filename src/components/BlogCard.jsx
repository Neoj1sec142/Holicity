import { Card, Button } from 'react-bootstrap';
import { RemoveBlog } from '../services/BlogServices';

const BlogCard = (props) => {
    
    const handleRemove = (id) => {
        RemoveBlog(id)
        window.location.reload(false)
    }

   const blog = props.blog
    
    if(props.profileUser){
        return (
            <div className='d-flex justify-content-center' key={blog.id}>
                <Card style={{maxWidth: '60%'}}>
                    <Card.Title  className='d-flex justify-content-center'>{blog.type}</Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>{blog.thoughts}</Card.Text>
                    <a href={`${blog.url}`} style={{textAlign: 'center'}}>{blog.url}</a>
                    {blog.userId === props.profileUser
                    ? <Button onClick={() => handleRemove(blog.id)}>X</Button>
                    : <div></div>}
                </Card>
            </div>
        )
    }
}

export default BlogCard
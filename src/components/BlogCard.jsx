import { Card, Button } from 'react-bootstrap';
import { RemoveBlog } from '../services/BlogServices';

const BlogCard = ({blog, user}) => {
    
    const handleRemove = async (id) => {
        await RemoveBlog(id)
        window.location.reload(true)
    }
    // console.log(blog,"BLOG")
    if (user && blog){
        return (
            <div className='d-flex justify-content-center' key={blog.id}>
                <Card style={{maxWidth: '60%'}}>
                    <Card.Title  className='d-flex justify-content-center'>{blog.type}</Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>{blog.thoughts}</Card.Text>
                    <a href={`${blog.url}`} style={{textAlign: 'center'}}>{blog.url}</a>
                    {blog.userId === user.id
                    ? <Button onClick={() => handleRemove(blog.id)}>X</Button>
                    : <div></div>}
                </Card>
            </div>
        )
    }
}

export default BlogCard
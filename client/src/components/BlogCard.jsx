import { Card } from 'react-bootstrap';

const BlogCard = ({blog}) => {

    return (
        <div className='d-flex justify-content-center' key={blog.id}>
            <Card style={{maxWidth: '60%'}}>
                <Card.Title  className='d-flex justify-content-center'>{blog.type}</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>{blog.thoughts}</Card.Text>
                <a href={`${blog.url}`} style={{textAlign: 'center'}}>{blog.url}</a>
            </Card>
        </div>
    )
}

export default BlogCard
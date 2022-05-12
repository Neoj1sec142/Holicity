// import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
    return (
        <div className='card-footer' style={{paddingBottom: '55px'}}>
          <div className='card-body align-bottom' >
            <img 
              style={{maxWidth: '40px'}}
              onClick={() => window.open('https://github.com/Neoj1sec142/','_blank')}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
              className="img-thumbnail" 
              alt='github icon' 
            />
            <img 
              style={{maxWidth: '40px'}}
              onClick={() => window.open('https://linkedin.com/in/markharmon142/','_blank')}
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
              className="img-thumbnail"  
              alt='linkedin icon' 
            />
            <p>Mark H.</p>
          </div>
        </div>
    )
}

export default Footer
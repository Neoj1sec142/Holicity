const Footer = () => {
    return (
        <div className='footer'>
          <footer id='footer-items'>
            <img 
              onClick={() => window.open('https://github.com/Neoj1sec142/','_blank')}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
              alt='github icon' 
            />
            <img 
              onClick={() => window.open('https://linkedin.com/in/markharmon142/','_blank')}
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" 
              alt='linkedin icon' 
            />
            <p>Mark H.</p>
          </footer>
        </div>
    )
}

export default Footer
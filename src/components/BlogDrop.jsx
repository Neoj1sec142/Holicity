
const BlogDrop = ({submenus, dropdown, handleBlog, setDropdown}) => {
  
  return (
    <div className='d-flex justify-content-center'>
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items" onClick={(e) => setDropdown(!dropdown)}>
            <button style={{textAlign: 'center'}} onClick={(e) => handleBlog(e)} name={`${submenu.title}`}>{submenu.title}</button>
          </li>
        ))}
     </ul>
     </div>
    );
   };
   
   export default BlogDrop
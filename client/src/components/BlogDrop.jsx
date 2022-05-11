

const BlogDrop = ({submenus, dropdown, handleBlog, setDropdown}) => {
  
  return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items" onClick={(e) => setDropdown(!dropdown)}>
            <button onClick={(e) => handleBlog(e)} name={`${submenu.title}`}>{submenu.title}</button>
          </li>
        ))}
     </ul>
    );
   };
   
   export default BlogDrop
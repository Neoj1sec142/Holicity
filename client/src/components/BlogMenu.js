import BlogDrop from "./BlogDrop";
import React, { useState } from "react";

const BlogMenu = ({items, user, handleBlog}) => {
    const [dropdown, setDropdown] = useState(false);
   
 return (
  <div style={{maxWidth: '60%'}}>
   {items.submenu ? (
    <>
    
    <div  id='pills-tabContent'>
     <button
         style={{marginLeft: '100%'}}
        className="tab-pane fade active show" id="pills-home"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
     >
      {items.title}{" "}
     </button>
     </div>
     
     <BlogDrop submenus={items.submenu} dropdown={dropdown} user={user} handleBlog={handleBlog} setDropdown={setDropdown} />
    </>
   ) : (
    <a href="/#">{items.title}</a>
   )}
  </div>
 );
};

export default BlogMenu
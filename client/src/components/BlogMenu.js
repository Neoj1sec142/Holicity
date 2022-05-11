import BlogDrop from "./BlogDrop";
import React, { useState } from "react";

const BlogMenu = ({items, user, handleBlog}) => {
    const [dropdown, setDropdown] = useState(false);
   
 return (
  <li className="menu-items">
   {items.submenu ? (
    <>
    <div className='tab-content' id='pills-tabContent'>
     <button
        className="tab-pane fade active show " id="pills-home"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
     >
      {items.title}{" "}
     </button>
     </div>
     <BlogDrop submenus={items.submenu} dropdown={dropdown} user={user} handleBlog={handleBlog}/>
    </>
   ) : (
    <a href="/#">{items.title}</a>
   )}
  </li>
 );
};

export default BlogMenu
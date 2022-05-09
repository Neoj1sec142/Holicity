import Dropdown from "./Dropdown.jsx";
import React, { useState } from "react";

const MenuItems = ({items, user}) => {
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
     <Dropdown submenus={items.submenu} dropdown={dropdown} user={user}/>
    </>
   ) : (
    <a href="/#">{items.title}</a>
   )}
  </li>
 );
};

export default MenuItems;
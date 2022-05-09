import Dropdown from "./Dropdown.jsx";
import { useState } from "react";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
 return (
  <li className="menu-items">
   {items.submenu ? (
    <>
     <button
      aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
     >
      {items.title}{" "}
     </button>
     <Dropdown submenus={items.submenu} dropdown={dropdown} />
    </>
   ) : (
    <a href="/#">{items.title}</a>
   )}
  </li>
 );
};

export default MenuItems;
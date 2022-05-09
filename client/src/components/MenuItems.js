import Dropdown from "./Dropdown.jsx";
import { useState } from "react";

const MenuItems = (props) => {
    const [dropdown, setDropdown] = useState(false);
    console.log("MENU", props)
 return (
  <li className="menu-items">
   {props.items.submenu ? (
    <>
     <button
      aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
     >
      {props.items.title}{" "}
     </button>
     <Dropdown submenus={props.items.submenu} dropdown={dropdown} props={props}/>
    </>
   ) : (
    <a href="/#">{props.items.title}</a>
   )}
  </li>
 );
};

export default MenuItems;
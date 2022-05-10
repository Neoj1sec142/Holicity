import React, {useState, useEffect} from 'react'
import {GetUserByName} from '../services/UserServices'

const Dropdown = ({submenus, dropdown, user}) => {
  const [profileUser, setProfileUser] = useState({})
  
  useEffect(() => {
    if(profileUser){
        const getUserData = async () => {
            const data = await GetUserByName(profileUser)
            setProfileUser(data)
        }
        getUserData()
    }
  }, [profileUser, user])
  
  return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            {submenu.title === 'profile' ?
              <a href={`/${submenu.title}/${user.id}`}>{submenu.title}</a>
              
              :
              <a href={`/${submenu.title}/`}>{submenu.title}</a>
            }
            
          </li>
        ))}
     </ul>
    );
   };
   
   export default Dropdown;
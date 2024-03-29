import React, {useState, useEffect} from 'react'
import {GetUserDetail} from '../services/UserServices'

const Dropdown = ({submenus, dropdown, user}) => {
  const [profileUser, setProfileUser] = useState({})
  
  useEffect(() => {
        const getUserData = async () => {
            const data = await GetUserDetail(user.id)
            setProfileUser(data)
        }
        getUserData()
  }, [user.id])
  
  if(profileUser){
  return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            {submenu.value === 'profile' ?
              <a href={`/${submenu.value}/${profileUser.id}`}>{submenu.title}</a>
              :
              <a href={`/${submenu.value}/`}>{submenu.title}</a>
            }
            
          </li>
        ))}
     </ul>
    );
    }
   };
   
   export default Dropdown;
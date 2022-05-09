import { useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import {GetUserByName} from '../services/UserServices'

const Dropdown = (props) => {
  const navigate = useNavigate()
  const params = useParams()
  const profileUser = params

  const [user, setUser] = useState({})
  console.log(profileUser,"USER")
  useEffect(() => {
    if(profileUser){
        const getUserData = async () => {
            const data = await GetUserByName(profileUser)
            setUser(data)
        }
        getUserData()
    }
  }, [profileUser, props.user])
  // console.log(user, "")
  return (
      <ul className={`dropdown ${props.dropdown ? "show" : ""}`}>
        {props.submenus.map((submenu, index) => (
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
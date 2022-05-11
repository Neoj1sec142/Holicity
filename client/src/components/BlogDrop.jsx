// import React, {useState, useEffect} from 'react'
// import {GetUserByName} from '../services/UserServices'

const BlogDrop = ({submenus, dropdown, handleBlog, setDropdown}) => {
  // const [profileUser, setProfileUser] = useState({})
  
  // useEffect(() => {
  //   if(profileUser){
  //       const getUserData = async () => {
  //           const data = await GetUserByName(profileUser)
  //           setProfileUser(data)
  //       }
  //       getUserData()
  //   }
  // }, [profileUser, user])
  
  return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items" onClick={(e) => setDropdown(!dropdown)}>
            <button onClick={(e) => handleBlog(e)} name={`${submenu.title}`}>{submenu.title}</button>
              {/* <a href={`/${submenu.title}/${user.id}`}>{submenu.title}</a> */}
            
          </li>
        ))}
     </ul>
    );
   };
   
   export default BlogDrop
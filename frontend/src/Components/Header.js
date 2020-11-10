import React from 'react';
import { NavLink } from 'react-router-dom';

const handleLoginRender = (isLoggedIn) => {
  if(isLoggedIn){
    return (
      <NavLink to="/logout"> Logout </NavLink>
    )
  }else{
    return(
      <>
        <NavLink to="/login"> Login </NavLink>
        <NavLink to="/signup"> Signup </NavLink>
      </>
    )
  }
}

const Header = (props) => {

  return (
    <div className='navbar'>
      <div className='header'> RPG Battle </div>
      <div className='links'>
        <NavLink to="/"> Home </NavLink>
        
        {
          handleLoginRender(props.isLoggedIn)
        }
      </div>
    </div>
  )
}

export default Header;

import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {

  return (
    
      <nav className='navs'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About</NavLink>
        <NavLink to='/members'>Members</NavLink>
        <NavLink to='/events'>Events</NavLink>
        <NavLink to='/contactus'>Contact</NavLink>
       <NavLink to='/profile'>Profile</NavLink>
       <NavLink to='/login'>Login:Register</NavLink>
      </nav>

  )
}

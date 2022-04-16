import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const NavLinkStyles = ({isActive}) =>{ 
    console.log(isActive);
    return {
      backgroundColor: isActive?'red':'',
      textDecoration: isActive?"":'none'
    }
  }
  return (
    <div className="flex" id="Navbar">
      <div><NavLink style={NavLinkStyles} className="mx-2" to="/">Home</NavLink></div>
      <div><NavLink style={NavLinkStyles} to="/about">about</NavLink></div>
      <div><NavLink style={NavLinkStyles} to="/Profile">Profile</NavLink></div>
    </div>
  )
}

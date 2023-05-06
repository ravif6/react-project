import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const navLinkStyle = ({isActive}) => {
        return {
            textDecoration: isActive ? 'none' :'underline',
            fontWeight: isActive ? 'bold' :'normal',
        }
    }
  return (
    <nav>
        <NavLink  style = {navLinkStyle} to ='/'>Home</NavLink>
        <NavLink style = {navLinkStyle} to = 'about'>About</NavLink>
        <NavLink style = {navLinkStyle} to = 'students'>Students</NavLink>
        <NavLink style = {navLinkStyle} to = 'contact'>Contact</NavLink>
        <NavLink style = {navLinkStyle} to = 'tutor'>Tutor</NavLink>
       
    </nav>
  )
}

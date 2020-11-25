import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header(props) {
    return (
        <header>
            <NavLink exact to='/' activeClassName='header-link-active' className='header-link'>Home</NavLink>
            <NavLink to='/about' activeClassName='header-link-active' className='header-link'>About</NavLink>
        </header>
    )
}
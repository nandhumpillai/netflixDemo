import React from 'react'
import './navbar.css'
import {navBarImageURL} from '../../constants/constant'

function NavbarDiv() {
  return (
    <div className='navbarMain'>
      <div className="navbar">
        <img className="logo" src={`${navBarImageURL}`} alt='logo'></img>
        <i className='avatar fa fa-user' aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default NavbarDiv

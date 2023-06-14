import React from 'react'
import './navbar.css'

function NavbarDiv() {
  return (
    <div className='navbarMain'>
      <div className="navbar">
        <img className="logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='logo'></img>
        <i className='avatar fa fa-user' aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default NavbarDiv

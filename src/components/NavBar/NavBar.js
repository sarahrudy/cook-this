import React from 'react';
import './NavBar.css'
import menu from '../../images/menu.png'

const NavBar = () => {
  return (
    <header className='nav-container'>
      <img src={ menu } className='nav-img' alt='menu' />
      <h1 className='nav-h1'>COOK THIS</h1>
      <p className='nav-p'>Quick Recipes for Busy People</p>
    </header>
  )
}

export default NavBar 
import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <>
    <div className='error-container'>
      <p>Error 404: Page Not Found</p>
      <p>Please navigate back to the home page.</p>
    </div>
     <Link to='/'>
      <button className='recipes-btn'>CLICK TO GO HOME</button>
    </Link>
    </>
  )
}

export default Error
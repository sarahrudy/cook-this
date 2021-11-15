import React, { useState } from 'react'
import Recipes from '../Recipes/Recipes'
import './RecipeCard.css'

const RecipeCard = ({ label, image }) => {
  const [ hover, setHover ] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div className='recipe-card'>
      <article className='recipe-card-container'>
        {hover 
        ?
        <h1>hi</h1>
        :
        <>
        <p className='recipe-card-title'>{ label }</p>
        <img className='recipe-card-image' src={ image } alt='recipe'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></img> 
        </> }
      </article>
    </div>
  )
}

export default RecipeCard 
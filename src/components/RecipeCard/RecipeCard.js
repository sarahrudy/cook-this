import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({ label, image }) => {
  return (
    <div className='recipe-card'>
      <article className='recipe-card-container'>
        <p className='recipe-card-title'>{ label }</p>
        <img className='recipe-card-image' src={ image } alt='recipe'></img>
      </article>
    </div>
  )
}

export default RecipeCard 
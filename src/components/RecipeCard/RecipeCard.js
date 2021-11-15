import React from 'react'
import './RecipeCard.css'
import { Link } from 'react-router-dom'

const RecipeCard = ({ label, image, url }) => {

  return (
    <div className='recipe-card'>
      <a href={ url } target="_blank" rel="noopener noreferrer">
        <article className='recipe-card-container'>
          <p className='recipe-card-title'>{ label }</p>
          <img className='recipe-card-image' src={ image } alt='recipe'></img>
        </article>
      </a>
    </div>
  )
}

export default RecipeCard 
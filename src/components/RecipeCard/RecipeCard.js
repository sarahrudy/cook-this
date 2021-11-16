import React from 'react'
import PropTypes from 'prop-types'
import './RecipeCard.css'

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

RecipeCard.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string
}

export default RecipeCard 


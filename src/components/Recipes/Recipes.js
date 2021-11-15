import React from 'react'
import { Link } from 'react-router-dom'
import './Recipes.css'
import RecipeCard from '../RecipeCard/RecipeCard'

const Recipes  = ({ searchedRecipes }) => {
  const recipeCard = searchedRecipes.map((recipe, i) => {
    return (
      <div className='recipes'>
        <RecipeCard 
          key={ i }
          label={ recipe.recipe.label }
          image={ recipe.recipe.image }
          url={ recipe.recipe.url }
        />
      </div>
    )
  })
  
  return (
    <>
    <div className='recipes-container'>{ recipeCard }</div>
    <Link to='/'>
      <button className='recipes-btn'>CLICK TO GO HOME</button>
    </Link>
    </>
  )
}

export default Recipes 
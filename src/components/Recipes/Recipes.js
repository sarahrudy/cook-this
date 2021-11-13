import React from 'react'
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
          // add onClick here to take user to url of recipe on web
        />
      </div>
    )
  })
  return(
    <div className='recipes-container'>{ recipeCard }</div>
  )
}

export default Recipes 
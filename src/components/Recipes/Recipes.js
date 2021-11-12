import React from 'react';
import './Recipes.css'
import RecipeCard from '../RecipeCard/RecipeCard'

const Recipes  = ({ recipes }) => {
  console.log(recipes)
  const recipeCard = recipes.map(recipe => {
    console.log(recipe.recipe.label)
    return (
      <div className='recipes'>
        <RecipeCard 
          label={ recipe.recipe.label }
          image={ recipe.recipe.image }
          key={recipe.id}
        />
      </div>
    )
  })
  return(
    <div className='recipes-container'>{ recipeCard }</div>
  )
}

export default Recipes 
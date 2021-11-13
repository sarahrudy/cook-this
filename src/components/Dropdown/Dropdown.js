import React, { useState, useEffect } from 'react'
import './Dropdown.css'
import { ingredientList } from '../../ingredientList'

const Dropdown = ({ handleSubmit }) => {
  const ingredients = ingredientList.map(ingredient => {
    return (
      <option value={ ingredient }>{ ingredient }</option>
    )
  }) 

  const [ ingredient1, setIngredient1] = useState(null)
  const [ ingredient2, setIngredient2] = useState(null)
  const [ ingredient3, setIngredient3] = useState(null)

  return (
    <div>
      <h1>Choose 3 ingredients:</h1>
      <select onChange={ event => setIngredient1(event.target.value) }>
        { ingredients }
      </select>
      <select onChange={ event => setIngredient2(event.target.value) }>
        { ingredients }
      </select>
      <select onChange={ event => setIngredient3(event.target.value) }>
        { ingredients }
      </select>
      <button onClick={() => handleSubmit(ingredient1, ingredient2, ingredient3) }>SEARCH RECIPES</button>
    </div>
  )
}

export default Dropdown 
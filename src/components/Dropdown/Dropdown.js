import React, { useState } from 'react'
import './Dropdown.css'
import { ingredientList } from '../../ingredientList'

const Dropdown = ({ handleSubmit }) => {
  const [ ingredient1, setIngredient1] = useState(null)
  const [ ingredient2, setIngredient2] = useState(null)
  const [ ingredient3, setIngredient3] = useState(null)

  const ingredients = ingredientList.map((ingredient, i) => {
    return (
      <option className='option' value={ ingredient } key={ i }>{ ingredient }</option>
    )
  })

  return (
    <div className='dropdown-container'>
      <h1 className='dropdown-title'>Choose up to 3 ingredients to find recipes:</h1>
        <select className='dropdown-box' onChange={ event => setIngredient1(event.target.value) }>
          { ingredients }
        </select>
        <select className='dropdown-box' onChange={ event => setIngredient2(event.target.value) }>
          { ingredients }
        </select>
        <select className='dropdown-box' onChange={ event => setIngredient3(event.target.value) }>
          { ingredients }
        </select>
      <button className='dropdown-btn' onClick={() => handleSubmit( ingredient1, ingredient2, ingredient3 ) }>SEARCH RECIPES</button>
    </div>
  )
}

export default Dropdown 
import React from 'react'
// import './Dropdown.css'
import { ingredientList } from '../../ingredientList'

const Dropdown = () => {
  const ingredients = ingredientList.map(ingredient => {
    return (
      <option value={ ingredient }>{ ingredient }</option>
    )
  }) 

  return (
    <div>
      <h1>Here's the dropdown</h1>
      <select>
        { ingredients }
      </select>
    </div>
  )
}

export default Dropdown 
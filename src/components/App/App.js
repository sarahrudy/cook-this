import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from '../NavBar/NavBar'
import Recipes from '../Recipes/Recipes'
import Dropdown from '../Dropdown/Dropdown'
import Ideas from '../Ideas/Ideas'
import { fetchRecipesByIngredients } from '../../apiCalls'
import { useHistory } from 'react-router-dom'

const App = () => {
  const history = useHistory()
  const [ searchedRecipes, setSearchedRecipes ] = useState([])
  const [ userIngredients, setUserIngredients ] = useState(null)

  useEffect(() => {
    if(userIngredients) {
    fetchRecipesByIngredients(userIngredients)
      .then(data => setSearchedRecipes(data)) }
  }, [userIngredients])
  
  const handleSubmit = (ingredient1, ingredient2, ingredient3) => {
    setUserIngredients(`${ingredient1}%20${ingredient2}%20${ingredient3}`)
    history.push('/recipes')
  }

  const handleImageClick = (ingredient) => {
    setUserIngredients(ingredient)
    history.push('/recipes')
  }

    return (
      <main className="app">
        <NavBar />
        <Switch >
          <Route exact path='/' render={() => <Dropdown handleSubmit={ handleSubmit } /> } />
          <Route exact path='/ideas' render={() => <Ideas handleImageClick={ handleImageClick} /> } />
          <Route exact path='/recipes' render={() => <Recipes searchedRecipes={ searchedRecipes } /> } />
        </Switch>
      </main>
    )
  }


export default App

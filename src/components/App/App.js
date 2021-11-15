import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import NavBar from '../NavBar/NavBar'
import Recipes from '../Recipes/Recipes'
import Dropdown from '../Dropdown/Dropdown'
import Ideas from '../Ideas/Ideas'
import Error from '../Error/Error'
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
          <Route exact path='/'><Dropdown handleSubmit={ handleSubmit }/></Route>
          <Route exact path='/ideas'><Ideas handleImageClick={ handleImageClick}/></Route>
          <Route exact path='/recipes'><Recipes searchedRecipes={ searchedRecipes } /></Route>
          <Route component={ Error } />
        </Switch>
      </main>
    )
  }


export default App

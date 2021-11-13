import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { fetchAllRecipes } from '../../apiCalls'
import NavBar from '../NavBar/NavBar'
import Recipes from '../Recipes/Recipes'
import Dropdown from '../Dropdown/Downdown'

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetchAllRecipes()
    .then(recipes => this.setState({ recipes: recipes })) 
  }
  
  render() {
    return (
      <main className="app">
        <NavBar />
        <Dropdown />
        <Route exact path='/' render={() => <Recipes recipes={ this.state.recipes } /> } /> 
      </main>
    )
  }
}

export default App

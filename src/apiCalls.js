export const fetchAllRecipes = () => {
  return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=b3d28c55&app_key=3572fecb4b04d1e24475822a52a414b9`)
  .then(response => checkError(response))
  .then(response => response.hits)
  .catch(error => console.log(error))
}

export const fetchRecipesByIngredients = (userIngredients) => {
  return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${userIngredients}&app_id=b3d28c55&app_key=3572fecb4b04d1e24475822a52a414b9&diet=low-carb&time=0-30`)
  .then(response => checkError(response))
  .then(response => response.hits)
  .catch(error => console.log(error))
}

const checkError = (response) => {
  if (!response.ok) {
    throw new Error(
      `Sorry! ${response.status}: ${response.statusText}. Please try again!`
    )
  } else {
      return response.json()
  }
}
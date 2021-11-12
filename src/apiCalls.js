export const fetchAllRecipes = () => {
  return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=b3d28c55&app_key=3572fecb4b04d1e24475822a52a414b9`)
  .then(response => checkError(response))
  .then(response => response.hits)
  .catch(error => console.log(error))
}

// export const fetchRecipeByIngredients = (ingredient) => {
//   return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=b3d28c55&app_key=3572fecb4b04d1e24475822a52a414b9&ingr=5-8&mealType=Dinner&imageSize=LARGE`)
//   .then(response => checkError(response))
//   .catch(error => console.log(error))
// }

const checkError = (response) => {
  if (!response.ok) {
    throw new Error(
      `Sorry! ${response.status}: ${response.statusText}. Please try again!`
    )
  } else {
      return response.json()
  }
}

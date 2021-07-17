export default (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE_TO_LIST":
      return {
        ...state,
        recipeList: [action.payload, ...state.recipeList]
      }
    case "ADD_RECIPE_TO_EATEN_LIST":
      return {
        ...state,
        eatenList: [action.payload, ...state.eatenList]
      }
    default:
      return state;
  }
}
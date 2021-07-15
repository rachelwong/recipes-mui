import React, {createContext, useReducer} from 'react'
import AppReducers from './AppReducers'

const initialState = {
  recipeList: [],
  eatenList: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

  // define state and dispatcher
  const [state, dispatch] = useReducer(AppReducers, initialState)

  // actions to tell reducer what to do at different flags

  const addToRecipeList = recipe => {
    console.log("ADD_RECIPE_TO_LIST", state, recipe)
    dispatch({type: "ADD_RECIPE_TO_LIST", payload: recipe})
  }

  const addToEatenList = recipe => {
    console.log("ADD_RECIPE_TO_EATEN_LIST", state, recipe)
    dispatch({type: "ADD_RECIPE_TO_EATEN_LIST", payload: recipe})
  }

  return (
    <GlobalContext.Provider value={{recipeList: state.recipeList, eatenList: state.eatenList, addToRecipeList, addToEatenList }}>
      { children }
    </GlobalContext.Provider>
  )
}
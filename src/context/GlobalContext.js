import React, {createContext, useReducer} from 'react'
import AppReducers from './AppReducers'

const initialContext = {
  recipeList: [],
  eatenList: []
}

export const GlobalContext = createContext(initialContext)

export const GlobalProvider = ({ children }) => {

  // define state and dispatcher
  const [state, dispatch] = useReducer(AppReducers)

  // actions to tell reducer what to do at different flags
  return (
    <GlobalContext.Provider value={{recipeList: state.recipeList, eatenList: state.eatenList }}>
      { children }
    </GlobalContext.Provider>
  )
}


import { createContext, useReducer, useContext } from 'react'

export const ContextData = createContext();

const initialState = {
 user:null,
 token:"",
}

const reducers = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
    default:
      return state;
  }

};

export const useStateValues = () => useContext(ContextData);

export function NewContextProvider({ children }) {

  return (<ContextData.Provider value={useReducer(reducers, { initialState })} >
    {children}
  </ContextData.Provider>
  )
}


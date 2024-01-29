import { createContext, useReducer, useContext } from 'react'

export const ContextData = createContext();

const initialState = {
 user:null,
 token:"",
 count:0,
 productDetails:null,
 cartData:null,
}


const reducers = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_CART_DATA":
        return {
          ...state,
          cartData: action.cartData,
        };
      case "SET_PRODUCT_DETAILS":
      return {
        ...state,
        productDetails:action.productDetails,
      };
      case "SET_COUNT":
      return {
        ...state,
        count: action.count,
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


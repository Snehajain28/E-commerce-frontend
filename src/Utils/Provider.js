import { createContext, useReducer, useContext } from 'react'

export const ContextData = createContext();

const initialState = {
 token:"",
 productDetails:null,
 cartData:[],
 favorites:[],
 totalAmt:0,
 user:null,
 role:"user",
 hamburger:false,
 info:false,
}


const reducers = (state, action) => {

  switch (action.type) {
    
      case "SET_CART_DATA":
        return {
          ...state,
          cartData: action.cartData,
        };
        
      case "SET_FAVORITES":
        return {
          ...state,
          favorites: action.favorites,
        };
       
      case "SET_INFO":
        return {
          ...state,
          info: action.info,
        };
      case "SET_HAMBURGER":
        return {
          ...state,
          hamburger: action.hamburger,
        };
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };
          case "SET_ROLE":
            return {
              ...state,
             role: action.role,
            };
      case "SET_PRODUCT_DETAILS":
      return {
        ...state,
        productDetails:action.productDetails,
      };

      case "SET_TOTAL_AMOUNT":
        return {
          ...state,
       totalAmt:action.totalAmt
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

  return (<ContextData.Provider value={useReducer(reducers, initialState)} >
    {children}
  </ContextData.Provider>
  )
}

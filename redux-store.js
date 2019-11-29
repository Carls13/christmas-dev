import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  products: []
}

export const actionTypes = {
  FILL_PRODUCTS: 'FILL_PRODUCTS'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_PRODUCTS:
      return Object.assign({}, state, {
        products: action.products
      })
    default:
      return state
  }
}

// ACTIONS
export const saveProductsData = (products) => {
  return { type: actionTypes.FILL_PRODUCTS, products }
}

export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}

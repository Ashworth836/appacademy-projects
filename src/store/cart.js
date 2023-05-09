const ADD_PRODUCT = 'cart/addProduct';
const REMOVE_PRODUCT = 'cart/removeProduct'
const INCREMENT_COUNT = 'cart/incrementCount';
const DECREMENT_COUNT = 'cart/decrementCount';
const SET_NEW_COUNT = 'cart/setCount';
const EMPTY_CART = 'cart/emptyCart';
const SHOW_CART = 'cart/showCart'


export const addProduct = (productId) => {
  return {
    type: ADD_PRODUCT,
    productId
  }
}

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    productId
  }
}

export const incrementCount = (productId) => {
  return {
    type: INCREMENT_COUNT,
    productId
  }
}

export const decrementCount = (productId) => {
  return {
    type: DECREMENT_COUNT,
    productId
  }
}

export const setNewCount = (productId, count) => {
  return {
    type: SET_NEW_COUNT,
    productId,
    count
  }
}

export const emptyCart = () => {
  return {
    type: EMPTY_CART
  }
}

export const shownCart = (bool) => {
  return {
    type: SHOW_CART,
    bool
  }
}

export default function cartReducer (state = {}, action) {
  const id = action.productId;
  const nextState = {...state};

  switch (action.type) {
    case ADD_PRODUCT:
      if (nextState[id]) {
        nextState[id].count++
      } else {
        nextState[id] = { id: id, count: 1 }
      }
      return nextState;

    case REMOVE_PRODUCT:
      delete nextState[id];
      return nextState;

    case INCREMENT_COUNT:
      nextState[id].count++;
      return nextState;

    case DECREMENT_COUNT:
      if (nextState[id].count > 1) {
        nextState[id].count--;
      } else {
        delete nextState[id];
      }
      return nextState;

    case SET_NEW_COUNT:
      const newCount = action.count;
      nextState[id].count = newCount;
      return nextState;

    case EMPTY_CART:
      return {};

    case SHOW_CART:
      nextState.shown = action.bool
      return nextState;

    default:
      return state;
  }
}
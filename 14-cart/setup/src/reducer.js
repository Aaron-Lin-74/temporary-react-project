const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newAmount =
      state.amount -
      state.cart.find((item) => item.id === action.payload).amount
    return {
      ...state,
      cart: state.cart.filter((item) => {
        return item.id !== action.payload
      }),
      amount: newAmount,
    }
  }
  if (action.type === 'INCREASE_AMOUNT') {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 }
        // ! this implementation does not work!
        // item.amount += 1
      }
      return item
    })
    return { ...state, cart: tempCart }
  }

  if (action.type === 'DECREASE_AMOUNT') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
          // ! this implementation does not work!
          // item.amount += 1
        }
        return item
      })
      .filter((item) => item.amount !== 0)
    return { ...state, cart: tempCart }
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem
        cartTotal.amount += amount
        cartTotal.total += amount * price
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload }
  }
  return state
}

export default reducer

import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    totalItems: 0,
    totalPrice: 0,
    products: [],
  },
  
  reducers: {
    
    addToCart:(state, action) =>{
      // check if product is already in the cart
      // if so, increace the count 

      // add object to products array
      state.products.unshift(action.payload);

      // update the cart totals (price && items)
      cartSlice.caseReducers.updateCartSummary(state);
    },

    removeFromCart:(state, action) =>{
      // find the index of the item in the array
      const itemIndex = state.products.findIndex( product => product.id === action.payload)
      //remove the item
      state.products = [
        // from the start to the one we want to delete
        ...state.products.slice(0, itemIndex),
        // after the deleted one to the end
        ...state.products.slice(itemIndex + 1)
      ]
      // update the cart totals (price && items)
      cartSlice.caseReducers.updateCartSummary(state);
    },


    calculateTotalPrice:(state) =>{
      var total = 0
      // loop through the products in the cart and add all prices
      state.products.forEach(product =>{
        total += product.price
      })
      state.totalPrice = total;
    },

    calculateTotalItems:(state)=>{
      state.totalItems = state.products.length;
    },

    updatePrice:(state, action)=>{
      
    }, 

    updateCartSummary(state){
      cartSlice.caseReducers.calculateTotalPrice(state);
      cartSlice.caseReducers.calculateTotalItems(state);
    },

    setUpdateState:(state, action) =>{
      state.updateState = action.payload
    },
    closeModal:(state, action)=>{
      state[action.payload] = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
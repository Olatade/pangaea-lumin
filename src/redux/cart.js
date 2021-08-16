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
      // add object to products array
      state.products.unshift(action.payload);
      
      // increment the total items counter
      // 
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
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    cart: false,
    account: false,
    menuBar: false
  },
  reducers: {
    
    updateCurrency:(state, action) =>{

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
export const { } = cartSlice.actions

export default cartSlice.reducer
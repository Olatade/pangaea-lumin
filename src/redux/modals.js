import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    cart: false,
    account: true,
    menuBar: false
  },
  reducers: {
    openModal:(state, action)=>{
      console.log('opening');
      switch(action.payload){
        //  set all other modal state to false when one is set to open
        case 'cart':
          state.cart = true;
          state.account = false;
          state.menuBar = false;
          break;
        case 'account':
          state.account = true;
          state.cart = false;
          state.menuBar = false;
          break;
        case 'menubar':
          state.menuBar = true;
          state.account = false;
          state.cart = false;
          break;
        default:
          state.account = false;
          state.cart = false;
      }
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
export const { openModal, closeModal, setUpdateState } = modalSlice.actions

export default modalSlice.reducer
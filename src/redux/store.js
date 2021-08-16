import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modals';
import cartReducer from './cart';

export default configureStore({ 
  reducer: {
    modal: modalReducer,
    cart: cartReducer
  } 
});
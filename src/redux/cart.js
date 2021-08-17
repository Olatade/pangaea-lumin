import { createSlice } from '@reduxjs/toolkit'
import { getRandomInt } from '../services/functions';

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    totalItems: 0,
    totalPrice: 0,
    products: [],
    optionsToView: {},
    currentCurrency: 'EUR'
  },

  reducers: {

    addToCart: (state, action) => {

      const product = action.payload;
      const similarProduct = state.products.find(pr => pr.productId === product.productId && JSON.stringify(pr.options) === JSON.stringify(product.options));
      if (!!similarProduct) {
        cartSlice.caseReducers.incrementProduct(state, similarProduct);
      } else {
        cartSlice.caseReducers.addNewProduct(state, product);
      }
    },

    updateProducts(state, action) {
      console.log('UPDATING PRODUCTS', action.payload)   
      

      if(action.payload){
        const products = state.products;
        const newProducts = action.payload;
        console.log(newProducts);
        products.forEach(pr => {
          pr.price = newProducts.find(pr => pr.id === pr.id).price;
        });
        cartSlice.caseReducers.updateCartSummary(state, products);
      }

      
    },

    changeCurrentCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },

    removeFromCart: (state, action) => {
      const products = state.products.filter(pr => pr.productId !== action.payload);
      cartSlice.caseReducers.updateCartSummary(state, products);
    },

    addNewProduct(state, productToAdd) {
      const productWithCount = { ...productToAdd, count: 1, productId: getRandomInt(1000000) };
      state.products.unshift(productWithCount);
      cartSlice.caseReducers.updateCartSummary(state, state.products);
    },

    incrementProduct: (state, product) => {
      const productToIncrement = state.products.find(pr => pr.productId === product.productId);
      productToIncrement.count = productToIncrement.count + 1;
      cartSlice.caseReducers.updateCartSummary(state, state.products);
    },

    decrementProductCount: (state, action) => {
      const product = action.payload;
      const minProductAllowedInCart = 1;

      const productToDelete = JSON.parse(JSON.stringify(product));
      productToDelete.count = productToDelete.count - 1;

      const products = state.products.filter(pr => pr.productId !== productToDelete.productId);
      product.count !== minProductAllowedInCart && products.unshift(productToDelete);

      cartSlice.caseReducers.updateCartSummary(state, products);
    },

    /**
     *  Add the options of a product to the cart state
     * The cart component will check this state and decide if it should display options for a product
     * @param {*} state 
     * @param {*} action 
     */
    setOptionsToView: (state, action) => {
      state.optionsToView = action.payload;
    },

    updateCartSummary(state, products) {
      const totalPrice = products.reduce((total, product) => { return total + product.price * product.count; }, 0);
      state.products = products.sort((a, b) => { return b.productId - a.productId });
      state.totalPrice = totalPrice;
      state.totalItems = state.products.length;
      state.optionsToView = {} // empty the product options object for re-use
    },

    clearOptionsView(state){
      state.optionsToView = {}
    },

    setUpdateState: (state, action) => {
      state.updateState = action.payload
    },

    closeModal: (state, action) => {
      state[action.payload] = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateProducts, addToCart, removeFromCart, decrementProductCount, setOptionsToView, changeCurrentCurrency, clearOptionsView } = cartSlice.actions

export default cartSlice.reducer
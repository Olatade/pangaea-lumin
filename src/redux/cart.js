import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    totalItems: 0,
    totalPrice: 0,
    products: [],
    optionsToView:{}
  },

  reducers: {

    addToCart: (state, action) => {

      const newProduct = action.payload;
      const newProductCount = 1;

      // if the payload has preference in them, add it
      
      const similarProduct = state.products.find(pr => pr.id === newProduct.id && JSON.stringify(pr.options) === JSON.stringify(newProduct.options));

      const productCount = similarProduct ? (similarProduct.count + newProductCount) : newProductCount;
      const product = similarProduct ? similarProduct : newProduct;
      const productWithCount = { ...product, count: productCount };

      const products = state.products.filter(pr => pr.id !== newProduct.id);
      products.unshift(productWithCount);

      cartSlice.caseReducers.updateCartSummary(state, products);

    },

    removeFromCart: (state, action) => {
      const products = state.products.filter(pr => pr.id !== action.payload);
      cartSlice.caseReducers.updateCartSummary(state, products);
    },

    decrementProductCount: (state, action) => {
      const product = action.payload;
      const minProductAllowedInCart = 1;

      const productToDelete = JSON.parse(JSON.stringify(product));
      productToDelete.count = productToDelete.count - 1;

      const products = state.products.filter(pr => pr.id !== productToDelete.id);
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
      state.products = products;
      state.totalPrice = totalPrice;
      state.totalItems = state.products.length;
      state.optionsToView = {} // empty the product options object for re-use
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
export const { addToCart, removeFromCart, decrementProductCount, setOptionsToView } = cartSlice.actions

export default cartSlice.reducer
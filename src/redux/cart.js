import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    totalItems: 0,
    totalPrice: 0,
    products: [],
  },

  reducers: {

    addToCart: (state, action) => {

      const newProduct = action.payload;
      const newProductCount = 1;

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
      if (product.count === minProductAllowedInCart) return;

      const productToDelete = JSON.parse(JSON.stringify(product));
      productToDelete.count = productToDelete.count - 1;

      const products = state.products.filter(pr => pr.id !== productToDelete.id);
      products.unshift(productToDelete);
      cartSlice.caseReducers.updateCartSummary(state, products);
    },

    updateCartSummary(state, products) {
      const totalPrice = products.reduce((total, product) => { return total + product.price * product.count; }, 0);
      state.products = products;
      state.totalPrice = totalPrice;
      state.totalItems = state.products.length;
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
export const { addToCart, removeFromCart, decrementProductCount } = cartSlice.actions

export default cartSlice.reducer
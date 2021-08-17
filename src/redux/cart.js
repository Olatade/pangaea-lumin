import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    totalItems: 0,
    totalPrice: 0,
    products: [],
    optionsToView:{
      "id": 3,
      "title": "Premium-Grade Moisturizing Balm",
      "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png",
      "price": 29,
      "product_options": []
      // "product_options": [
      //   {
      //     "title": "Age Bracket",
      //     "prefix": "Age",
      //     "suffix": null,
      //     "options": [
      //       {
      //         "id": 99,
      //         "value": "13-24"
      //       },
      //       {
      //         "id": 100,
      //         "value": "25-34"
      //       },
      //       {
      //         "id": 101,
      //         "value": "35-45"
      //       },
      //       {
      //         "id": 102,
      //         "value": "46-55"
      //       },
      //       {
      //         "id": 103,
      //         "value": "56+"
      //       }
      //     ]
      //   },
      //   {
      //     "title": "Skin Type",
      //     "prefix": null,
      //     "suffix": "Skin",
      //     "options": [
      //       {
      //         "id": 96,
      //         "value": "Dry"
      //       },
      //       {
      //         "id": 97,
      //         "value": "Combination"
      //       },
      //       {
      //         "id": 98,
      //         "value": "Oily"
      //       }
      //     ]
      //   },
      //   {
      //     "title": "Frequency",
      //     "prefix": null,
      //     "suffix": null,
      //     "options": [
      //       {
      //         "id": 181,
      //         "value": "One Month"
      //       },
      //       {
      //         "id": 220,
      //         "value": "One Month Supply"
      //       },
      //       {
      //         "id": 182,
      //         "value": "Two Month"
      //       },
      //       {
      //         "id": 221,
      //         "value": "Two Month Supply"
      //       }
      //     ]
      //   }
      // ]
    }
  },

  reducers: {

    addToCart: (state, action) => {
      // console.log('Seye receiving', action.payload);

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
      state.products = products.sort((a, b) => a.id - b.id);
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
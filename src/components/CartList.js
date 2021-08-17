import { getRandomInt } from '../services/functions';
import CartItem from './CartItem';

/**
 * Renders a list of products that go
 * @param {*} props 
 * @returns 
 */
 function CartList(props) {
  const { productList } = props
  // Display a list of products if the productList array is not empty
  if (productList.length > 0) {
    return (
      <div className="px-4 pt-28 bg-secondary-light max-h-screen pb-64 space-y-6 overflow-y-scroll">
        {
          productList.map(product => {
            return <CartItem key={product.id + getRandomInt(100)} product={product} />
          })
        }
      </div>
    )
  }

  // Display empty cart message
  else {
    return (
      <div className="px-4 pt-28" >
        <p className="text-base text-center">There are no items in your cart</p>
      </div>
    )
  }

}

export default CartList;
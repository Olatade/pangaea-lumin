import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { removeFromCart, addToCart, decrementProductCount } from '../redux/cart';
/**
 * Renders a single product that goes into the cartList
 * @param {*} props 
 * @returns 
 */
 function CartItem(props) {
  const dispatch = useDispatch();
  const { product } = props;
  console.log('FROM CART', product.options);

  let str = ''
  for (const property in product.options) {
    str += `${product.options[property]} | `;
  }

  return (
    <div className=" flex relative justify-between items-center bg-white px-4 pt-5 pb-4">
      {/* close button */}
      <span onClick={() => dispatch(removeFromCart(product.id))} className="cursor-pointer absolute top-2 right-2"><AiOutlineClose /></span>

      {/* Product details && quantity toggle */}
      <div className=" flex-1 space-y-3 pr-12">

        <div className="space-y-1">
          <h4 className="text-sm">{product.title}</h4>
          <p className="text-xs">{str}</p>
          <p className="text-xxs">One time putchase of two month supply</p>
        </div>

        <div className="flex items-center justify-between">
          {/* quantity toggle */}
          <div className="flex px-2 py-1 w-max border border-gray-400 items-baseline">
            <span className="pr-4 cursor-pointer" onClick={() => dispatch(decrementProductCount(product))}>-</span>
            <span className="text-sm">{product.count}</span>
            <span className="pl-4 cursor-pointer" onClick={() => dispatch(addToCart(product))}>+</span>
          </div>

          {/* price */}
          <p className="text-base font-thin">${product.price * product.count }</p>
        </div>
      </div>

      {/* Product image */}
      <div className="w-20">
        <img className="w-full" src={product.image_url} alt="lumin" />
      </div>
    </div>
  )
}

export default CartItem;
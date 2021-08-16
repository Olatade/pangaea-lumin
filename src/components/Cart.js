import Modal from 'react-modal';
import {IoChevronForwardCircleOutline } from 'react-icons/io5'
import {AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {closeModal} from '../redux/modals';
import { getRandomInt } from "../services/functions.js"; 

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: 0,
    right: 0,
    left: '60%',
    overflow: 'hidden',
    border: 'none',
    padding: 0,
    height: '100vh',
  },
  overlay:{
    background: 'rgba(209,213,210,0.71)',
  }
};

const mobileStyles = {
  content: {
    top: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
    border: 'none',
    padding: 0,
    height: '100vh',
  },
  overlay:{
    background: 'rgba(209,213,210,0.71)',
  }
};

const CartFooterStyle = styled.div`
    -webkit-box-shadow: 0px -7px 15px -2px rgba(209,213,210,0.71);
    -moz-box-shadow: 0px -7px 15px -2px rgba(209,213,210,0.71);
    box-shadow: 0px -7px 15px -2px rgba(209,213,210,0.71);
`;

/**
 * Renders a single product that goes into the cartList
 * @param {*} props 
 * @returns 
 */
function CartItem(props){
  const { item } = props;
  return (
    <div className=" flex relative justify-between items-center bg-white px-4 pt-5 pb-4">
      {/* close button */}
      <span className="absolute top-2 right-2"><AiOutlineClose/></span>

      {/* Product details && quantity toggle */}
      <div className=" flex-1 space-y-3 pr-12">

        <div>
          <h4 className="text-sm">{item.title}</h4>
          <p className="text-xs">Brown</p>
          <p className="text-xxs">One time putchase of two month supply</p>
        </div>

        <div className="flex items-center justify-between">
          {/* quantity toggle */}
          <div className="flex px-2 py-1 w-max border border-gray-400 items-baseline">
            <span className="pr-4 cursor-pointer">-</span>
            <span className="text-sm">1</span>
            <span className="pl-4 cursor-pointer">+</span>
          </div>

          {/* price */}
          <p className="text-base font-thin">${item.price}</p>
        </div>
      </div>
      
      {/* Product image */}
      <div className="w-20">
        <img className="w-full"  src={item.image_url} alt="lumin" />
      </div>
   </div>      
  )
}

/**
 * Renders a list of products that go
 * @param {*} props 
 * @returns 
 */
function CartList(props){
  const { productList } = props

  // Display a list of products if the productList array is not empty
  if(productList.length > 0 ){
    return(
      <div className="px-4 pt-28 bg-secondary-light max-h-screen pb-64 space-y-6 overflow-y-scroll">
        {
          productList.map( product => {
            return <CartItem key={(product.id + getRandomInt(1000))} item={product}/>
          })
        }
      </div>
    )
  }

  // Display empty cart message
  else{
    return(
      <div>
        <p className="text-base">There are no items in your cart</p>
      </div>
    )
  }

}


function Cart(){
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.modal);
  const { products } = useSelector(state => state.cart);


  return(
    <div>  
      <Modal 
        isOpen={cart}
        style={ window.innerWidth > 768 ? customStyles : mobileStyles}
      >
        <div className="relative min-h-full overflow-hidden">
        

          {/* Cart head - || title && close icon */}
          <div className="z-40 absolute top-0 w-full pt-6 px-4 bg-secondary-light ">

            {/* close icon */}
            <span onClick={ () => dispatch(closeModal('cart'))} className="cursor-pointer absolute text-2xl text-primary-dark"><IoChevronForwardCircleOutline/></span>
            {/* heading */}
            <h2 className="text-center text-xxs text-gray-400">YOUR CART</h2>

            {/* currency select */}
            <form  className="ml-auto pt-6">
              <label htmlFor="cars" className="sr-only">Choose a car:</label>

              <select name="cars" id="currency" className=" text-sm border py-2 px-2 pr-4">
                <option value="">USD</option>
                <option value="volvo">EUR</option>
                <option value="saab">AUD</option>
                <option value="mercedes">CAD</option>
              </select> 
            </form>
          </div>

          {/* Products */}
          <CartList productList={products}/>
          
          {/* Cart foot */}
          <CartFooterStyle  className="absolute px-5 bg-secondary-light w-full bottom-0 py-6 space-y-6 shadow-2xl">

            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>$24.00</p>
            </div>

            <div className="space-y-3">
              <button href="" className="w-full bg-white px-6 py-3 text-sm text-center text-primary-dark border border-primary-dark ">MAKE THIS A SUBSCRIPTION (SAVE 20%)</button>
              <button href="" className="w-full bg-primary-dark text-sm px-6 py-3 text-center text-white">PROCEED TO CHECKOUT</button>
            </div>

          </CartFooterStyle>
        </div>
      </Modal>
    </div>
  )
}

export default Cart;
import Modal from 'react-modal';
import { IoChevronForwardCircleOutline } from 'react-icons/io5'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/modals';
import { useEffect } from 'react';
import CartList from './CartList';
import ProductOptionsView from './ProductOptionsView';

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
  overlay: {
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
  overlay: {
    background: 'rgba(209,213,210,0.71)',
  }
};

const CartFooterStyle = styled.div`
    -webkit-box-shadow: 0px -7px 15px -2px rgba(209,213,210,0.71);
    -moz-box-shadow: 0px -7px 15px -2px rgba(209,213,210,0.71);
    box-shadow: 0px -7px 15px -2px rgba(209,213,210,0.71);
`;



function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.modal);
  const { products, totalPrice } = useSelector(state => state.cart);

  useEffect(() => {

  }, [products])

  return (
    <div>
      <Modal
        isOpen={cart}
        closeTimeoutMS={500}
        style={window.innerWidth > 768 ? customStyles : mobileStyles}
      >
        <div className="relative min-h-full bg-secondary-light overflow-hidden">

          {/* View to display the product options if any */}
          <ProductOptionsView/>

          {/* Cart head - || title && close icon */}
          <div className="z-10 absolute top-0 w-full pt-6 px-4 bg-secondary-light ">

            {/* close icon */}
            <span onClick={() => dispatch(closeModal('cart'))} className="cursor-pointer absolute text-2xl text-primary-dark"><IoChevronForwardCircleOutline /></span>
            {/* heading */}
            <h2 className="text-center text-xxs text-gray-400">YOUR CART</h2>

            {/* currency select */}
            <form className="ml-auto pt-6">
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
          <CartList productList={products} />

          {/* Cart foot */}
          <CartFooterStyle className="absolute px-5 bg-secondary-light w-full bottom-0 py-6 space-y-6 shadow-2xl">

            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
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
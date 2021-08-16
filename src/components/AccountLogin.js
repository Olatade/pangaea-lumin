import Modal from 'react-modal';
import {IoChevronForwardCircleOutline } from 'react-icons/io5'
import {useSelector, useDispatch} from 'react-redux';
import {closeModal } from '../redux/modals';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: 0,
    right: 0,
    left: '66%',
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



function AccountLogin(){
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.modal);

  return(
    <div>  
      <Modal 
        isOpen={account}
        style={ window.innerWidth > 768 ? customStyles : mobileStyles}
      >
        <div className="bg-secondary-light min-h-full py-10 px-6  space-y-10">

          {/* close icon */}
          <span onClick={ () => dispatch(closeModal('account')) } className="text-2xl text-primary-dark"><IoChevronForwardCircleOutline/></span>

          <div className="px-3 space-y-6">
            <h3 className="font-heading text-2xl md:text-4xl">Welcome Back</h3>
            <p className="text-xs md:text-base font-normal leading-5">Please enter your email address associated with your order. An authentication link will be emailed to this address.</p>

            <form className="space-y-6">
              <label for="email "></label>
              <input className="w-full bg-transparent focus:border-white text-base md:text-sm py-2 pl-4 font-thin text-gray-200 border-b border-primary-dark" name="email" type="text" placeholder="Email"></input>
              <button href="" className="w-full bg-primary-dark text-xs px-6 py-3 text-center font-bold text-white">Email me a login link</button>
            </form>
          </div>


        </div>
      </Modal>
    </div>
  )
}

export default AccountLogin;
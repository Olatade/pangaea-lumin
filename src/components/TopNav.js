
import { VscMenu } from 'react-icons/vsc';
import { IoCartOutline } from 'react-icons/io5';
import styled from 'styled-components';
import luminLogo from '../img/logo.png';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { openModal } from '../redux/modals';

// position the cart number relative to the cart icon container
const CartCount = styled.span`
  top: -5px;
  right: 0px;
`;

function TopNav() {
  const dispatch = useDispatch();

  useEffect( ()=>{
    // 
    var topNav = document.getElementById("top-nav");
    var sticky = topNav.offsetTop;

    function scrollWatch() {
      if (window.pageYOffset > sticky) {
        topNav.classList.add("sticky");
        topNav.classList.add("top-0");
        topNav.classList.remove("bg-secondary-light");
        topNav.classList.add("bg-white");
      } else {
        topNav.classList.remove("sticky");
        topNav.classList.remove("top-0");
        topNav.classList.remove("bg-white");
        topNav.classList.add("bg-secondary-light");
      }
    }
    
    // add and remove classes from the top navigation when it is scrolled
    window.onscroll = function() {scrollWatch()};
  },[])

  return(
    <div id="top-nav" className="flex py-2 px-5 md:px-10 bg-secondary-light items-center justify-between shadow-md border-b border-gray-300">

      {/* Menu icon && Brand logo */}
      <div className="flex items-center">
        <span className="md:hidden"><VscMenu/></span>
        <span className=" hidden md:block"><img className="h-11" src={luminLogo} alt="Lumin logo"/></span>
        <ul className="hidden md:flex font-semibold pl-20 space-x-8 text-sm">
          <li><button className="text-black hover:text-gray-500 transition duration-300">Shop</button></li>
          <li><button className="text-black hover:text-gray-500 transition duration-300">About</button></li>
          <li><button className="text-black hover:text-gray-500 transition duration-300">Support</button></li>
          <li><a href="https://www.luminskin.com/blog/" className="text-black hover:text-gray-500 transition duration-300">Blog</a></li>
        </ul>
      </div>
      
      {/* Account link, cart icon && language selection */}
      <div className="flex space-x-5 items-center">
        {/* account link */}
        <button onClick={() => dispatch(openModal('account'))} className="text-sm text-black hover:text-gray-500 transition duration-300">Account </button>

        {/* cart icon, cart total */}
        <button onClick={() => dispatch(openModal('cart'))} className="flex relative pr-1">
          <span className="text-2xl pr-1  transform rotate-6"><IoCartOutline/></span>
          <CartCount className="text-sm self-start absolute">0</CartCount>
        </button>

        {/* Langauge selection */}
        <div className="font-light border border-gray-700 py-0.5 pl-4 pr-16">EN</div>
      </div>
    </div>
  )
}

export default TopNav

import { VscMenu } from 'react-icons/vsc';
import { IoCartOutline } from 'react-icons/io5';
import styled from 'styled-components';
import luminLogo from '../src/img/logo.png';

const CartCount = styled.span`
  top: -5px;
  right: 0px;
`;

function TopNav() {
  return(
    <div className="flex py-2 px-5 md:px-10 bg-secondary-light items-center justify-between shadow-md border-b border-gray-300">

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
        <a href="/" className="text-sm text-black hover:text-gray-500 transition duration-300">Account </a>

        {/* cart icon, cart total */}
        <div className="flex relative pr-1">
          <span className="text-2xl pr-1  transform rotate-6"><IoCartOutline/></span>
          <CartCount className="text-sm self-start absolute">0</CartCount>
        </div>

        {/* Langauge selection */}
        <div className="font-light border border-gray-700 py-0.5 pl-4 pr-16">EN</div>
      </div>
    </div>
  )
}

export default TopNav
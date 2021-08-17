import styled from "styled-components";
import Products from '../services/getAllProducts';
import { useDispatch} from "react-redux";
import { openModal } from "../redux/modals";
import { addToCart, setOptionsToView } from "../redux/cart";

const PulsateStyle = styled.div`
    animation-name: color;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;

  @keyframes color {
    0% {
      background-color: #d1d5d2;
    }
    50% {
      background-color: #e2e6e3;
    }
    100% {
      background-color: #d1d5d2;
    }
  }
`;



const SingleProduct = (props) =>{
  const { productData } = props;
  const dispatch = useDispatch();


  // function to handle how a product is added to the cart
  function handleAddToCart(productData){

   const { product_options } = productData;
    
   if( product_options.length < 1){
    console.log('we do not have options')
    // add the product to the cart
    dispatch(addToCart(productData));
    dispatch(openModal('cart'));
   }else{
    //  add the options to the cart state
     dispatch(setOptionsToView(productData))
    //  display the cart
    

     // display product options
     
     // display cart
    console.log('we have options')
   }
    
  
  }

  const {title, image_url, price} = productData;
  return(
    <div className="text-center space-y-4">
      <div className=" flex h-44 w-auto justify-center">
        <img className="h-full" src={image_url} alt="product"/>
      </div>
      <h5 className="text-xs font-thin md:text-base">{title}</h5>
      <p className="text-sm font-normal md:text-lg ">${price}</p>
      <button onClick={() => handleAddToCart(productData)} className="w-full trasnsition duration-300 hover:bg-primary-dark2 font-bold text-white px-6 py-4 text-sm text-center bg-primary-dark ">Add to cart</button>
    </div>
  )
}


function ProductList() {
  const state = ''

  if(state === 'loading'){
    return (
      <div className="px-6 md:px-28 py-8 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 bg-primary-light">
        <div className="space-y-3">
          <PulsateStyle className="rounded h-44"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
        </div>
  
        <div className="space-y-3">
          <PulsateStyle className="rounded h-44"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
        </div>
  
        <div className="space-y-3">
          <PulsateStyle className="rounded h-44"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
          <PulsateStyle className="rounded h-6"></PulsateStyle>
        </div>
  
        <div className="space-y-3 md:hidden">
          <div className="rounded bg-secondary-dark h-44"></div>
          <div className="rounded bg-secondary-dark h-6"></div>
          <div className="rounded bg-secondary-dark h-6"></div>
          <div className="rounded bg-secondary-dark h-6"></div>
        </div>
  
      </div>
    )
  }
  else{
    return(
      <div className="px-6 md:px-10 lg:px-32 py-8 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-x-40 lg:gap-y-32 bg-primary-light">
        {
          Products.products.map( product => {
            return <SingleProduct productData={product} key={product.id} />
          })
        }
      </div>
    )
  }
}

export default ProductList;
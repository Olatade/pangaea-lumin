import styled from "styled-components";
import { useDispatch} from "react-redux";
import { openModal } from "../redux/modals";
import { addToCart, setOptionsToView } from "../redux/cart";
import {useQuery, gql} from "@apollo/client";

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
    // add the product to the cart
    dispatch(addToCart({...productData, options: []}));
    dispatch(openModal('cart'));
   }else{
    //  add the options to the cart state
     dispatch(setOptionsToView(productData))
     dispatch(openModal('cart'));
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

  const ALL_PRODUCTS = gql`
  query GetProducts {
    products{
      id
      title
      image_url
      price( currency: USD)
      product_options{
        title
        prefix
        suffix
        options{
          id
          value
        }
      }
    }
  }
`

const { loading, error, data } = useQuery(ALL_PRODUCTS);


  if(loading || error ){
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

    return(
      <div className="px-6 md:px-10 lg:px-32 py-8 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-x-40 lg:gap-y-32 bg-primary-light">
        {
          data.products.map( product => {
            return <SingleProduct productData={product} key={product.id} />
          })
        }
      </div>
    )

}

export default ProductList;
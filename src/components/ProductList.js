import styled from "styled-components";
import Products from '../services/getAllProducts';


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

const SingleProduct = () =>{
  return(
    <div className="text-center space-y-4">
      <div>
        <img src="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968" alt="product"/>
      </div>
      <h5 className="text-sm font-thin md:text-base">Age Management Set</h5>
      <p className="text-sm font-normal md:text-lg ">$55.00</p>
      <button className="w-full font-bold text-white px-6 py-4 text-sm text-center bg-primary-dark ">Add to cart</button>
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
      <div className="px-6 md:px-10 lg:px-32 py-8 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-40 bg-primary-light">
        {
          [1, 2, 3, 4].map( product => {
            return <SingleProduct key={product} />
          })
        }
      </div>
    )
  }


}

export default ProductList;
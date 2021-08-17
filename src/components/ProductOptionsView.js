import { useSelector, useDispatch } from 'react-redux';
import {addToCart} from '../redux/cart';
import { closeModal } from '../redux/modals';
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

// this component renders personalization view for an object you are about to add to cart
function ProductOptionsView(){
  const dispatch = useDispatch();
  const { optionsToView } = useSelector(state => state.cart);
  const { product_options } = optionsToView //options to view is the product object including the image and title e.t.c
  

  //  const isOptions = Object.keys(product_options).length > 0 ? true : false

  // create a state to display and hide this component
  function addProductWithOptionsToCart(something, e){
    e.preventDefault();

    // new product should be the product we are adding + a value that has the options that were selected
    // const newProduct = {} 
    dispatch(addToCart(something))

  }

  // if there are product options in the product in OptionToView state in cart
  if(optionsToView?.product_options && optionsToView?.product_options.length > 0 ){
    return (
        <div className="z-20  absolute top-0 w-full h-full pt-6 px-4 bg-secondary-light">
  
          {/* close icon */}
          <span onClick={() => dispatch(closeModal('cart'))} className="cursor-pointer absolute text-2xl text-primary-dark"><IoChevronForwardCircleOutline /></span>
         
         {/* image */}
          <div className="text-center">
            <img className="h-20 m-auto "  src={optionsToView.image_url} alt=""/>
          </div>

          <div className="space-y-8 pt-6">
            <div>
              <h5 className="font-heading text-2xl">First, let's personalize.</h5>
              <p className="text-sm" >Products that you receive may vary according to</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs">Personalization details</h3>
              <form className="flex flex-col">
                <div className="flex-grow space-y-4">
                {
                  // loop over the values under an option e.g age range
                  product_options.map( option =>{
                    return(
                      <div className="">
                        <label className="text-sm" htmlFor={option.prefix} >{option.title}</label>
                        <select className="text-sm w-full mt-1 py-4 px-5" name="cars" id="currency">
                          {
                            option.options.map( singleOption =>{
                              return <option className="text-sm" key={singleOption.id} value={singleOption.value}>{singleOption.value}</option>
                            })
                          } 
                        </select>
                      </div>
                    )
                  })
                }
                </div>
                
                <button onClick={ (e) => addProductWithOptionsToCart(optionsToView, e)}  className="mt-6 w-full bg-primary-dark text-sm px-6 py-3 text-center text-white">Add to Cart</button>

                
              </form>

            </div>
            
          </div>
        </div>
      

    )
  }
    // else don't do anything
  else{
    return(
      <div>

      </div>
    )
  }


}


export default ProductOptionsView;
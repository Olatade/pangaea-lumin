import { useSelector, useDispatch } from 'react-redux';
import {addToCart} from '../redux/cart';
import { closeModal } from '../redux/modals';
import { IoChevronForwardCircleOutline } from 'react-icons/io5'
import {Formik, Form, Field} from 'formik';

function OptionsForm(props){
  const { optionsToView } = props;
  const dispatch = useDispatch();
  const { product_options } = optionsToView;

  const values = {}

  // get initial values for the form
  product_options.forEach(option =>{
    console.log(option.title.split(" ")[0]);
    values[option.title.split(" ")[0]] = option.options[0].value;
  })

  return(
    <Formik
      initialValues={values}

      onSubmit={ (values, functions)=>{
        const producuctWithOptions = {...optionsToView, options: values}
        console.log( 'Tade sending:', producuctWithOptions);
        dispatch(addToCart(producuctWithOptions))
      }}

    >
      <Form className="flex flex-col">
        <div className="flex-grow space-y-4">
        {
          // loop over the values under an option e.g age range
          product_options.map( option =>{
            return(
              <div className="" key={option.title.split(" ")[0]}>
                <label className="text-sm" htmlFor={option.title.split(" ")[0]} >{option.title}</label>

                <Field className="text-sm w-full mt-1 py-4 px-5" name={option.title.split(" ")[0]} id="currency" as="select">
                  {
                    option.options.map( singleOption =>{
                      return <option className="text-sm" key={singleOption.id} value={singleOption.value}>{singleOption.value}</option>
                    })
                  } 
                </Field>
              </div>
            )
          })
        }
        </div>
        <button type="submit"   className="mt-6 w-full bg-primary-dark text-sm px-6 py-3 text-center text-white">Add to Cart</button>

          
        </Form>

    </Formik>

  )
}


// this component renders personalization view for an object you are about to add to cart
function ProductOptionsView(){
  const dispatch = useDispatch();
  const { optionsToView } = useSelector(state => state.cart);

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

              <OptionsForm optionsToView={optionsToView} />
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
function ProductFilter(){
  return(
    <div className="space-y-8 pt-16 pb-8 px-6 md:px-20 bg-secondary-light md:flex md:items-center md:py-24">

      <div className="flex-1 md:space-y-4">
        <h1 className="text-2xl font-heading md:text-5xl md:font-thin">All Products</h1>
        <p className="text-sm md:text-base font-normal">A 360&#176; look at Lumin</p>
      </div>

      <div className=" md:flex flex-1">
        <form  className="ml-auto md:w-96">
          <label for="cars" className="sr-only">Choose a car:</label>

          <select name="cars" id="cars" className="border w-full py-4 px-4 pr-4border-gray-600">
            <option value="">Filter by</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select> 

        </form>
      </div>
      
    </div>
  )
}

export default ProductFilter;
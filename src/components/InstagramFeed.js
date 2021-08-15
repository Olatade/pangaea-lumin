
import {BsArrowRight} from 'react-icons/bs';

function InstagramFeed(){
  return (
    <div className=" space-y-6 px-6 py-12 bg-secondary-light">

      {/* title */}
      <div className="flex justify-center">
        <h2 className="flex underline items-center font-heading text-center text-2xl"> Join the #ManCareMovement <span className="mt-0.5 ml-1"><BsArrowRight/></span></h2>
      </div>

      {/* Instagram images */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
        <img src="https://i.shgcdn.com/d39c7a95-9888-4f13-b43a-355a2f0849dd/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="lumin-IG"></img>
        <img src="https://i.shgcdn.com/19e25e65-d583-4357-9626-ee0f08d88c34/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="lumin-IG"></img>
        <img src="https://i.shgcdn.com/c5b55791-a2d4-4659-b8bd-93ab3d0b3874/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="lumin-IG"></img>
        <img src="https://i.shgcdn.com/b24d9740-8340-40dd-ab30-c5e35d755c26/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="lumin-IG"></img>
        <img className="hidden md:block" src="https://i.shgcdn.com/4fce0508-7701-43b0-893b-51c6fc785b5f/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="lumin-IG"></img>
      </div>
    </div>
  )
}

export default InstagramFeed;
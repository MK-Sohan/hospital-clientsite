
import cardimage1 from "../../Assets/cardimage/home-doctor-visits 1.png";
import cardimage2 from "../../Assets/cardimage/th (1) 2.png";
import cardimage3 from "../../Assets/cardimage/Children-Healthcare-1920x1080 1 (1).png"
import { Link } from "react-router-dom";


function HelpPackageCard() {
const image =[{img:cardimage1},
{img:cardimage2},
{img:cardimage3}]


  return (
   <div className="block lg:hidden">

<div div className="flex gap-x-3 ">
    {
      image.map((val=>{
        return(
<div className="card bg-white w-[200px]   rounded-lg border-[1px] border-gray-300">
        <div className="top">
          <img
            className="w-[200px] h-[200px] object-cover  p-2"
            src={val.img}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-center ">
          <div className="title font-semibold text-xs my-1">
          Daily Doctor Home visit package
          </div>
          <div className="category text-xs font-light my-1">
          8000 Taka/monthly

          </div>

          <div className="pricing flex items-center">
            {" "}

            <div className="ml-2 text-xs ">
            For 1 adult
            </div>
          </div>
          <Link to='/packageDetail' className="w-full">
          <div className="flex pt-4  w-full">
           
           <button className="w-full border bg-slate-400 px-3 py-1 text-xs   ">
           Details
           </button>
           
         </div>
          </Link>
       
        </div>
      </div>
        )
      }))
    }
      
    </div>

   </div>
  );
}
export default HelpPackageCard;

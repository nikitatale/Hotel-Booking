import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

export default function FeaturedDestination(){
    const navigate = useNavigate()
   return(
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
         <Title title='Destinations You will Love' subTitle="Curated locations to match your lifestyle and travel goals."/>
         <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
            {roomsDummyData.slice(0,4).map((room, index) => (
               <HotelCard key={room._id} room={room} index={index}/>
            ))}
         </div>
         
         <button onClick={() => {navigate('/rooms'); scrollTo(0,0)}} className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-black hover:text-white transition-all cursor-pointer">
            Uncover Places
         </button>
    </div>
   )
}
import { assets, cities } from "../assets/assets";

function Hero(){
    return(
        <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white 
   bg-[url('/src/assets/heroImage.png')] bg-cover bg-center h-screen">

    <p className="bg-[#49b9ff]/50 px-3.5 py-1 rounded-full mt-20">The ultimate stay, redefined</p>
     <h1 className="font-plyfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">Make Every Journey Feel Like Home</h1>
     <p className="max-w-130 mt-2 text-sm md:text-base"> Find places that welcome you with warmth, safety, and enough room for everyone. <br /> With thoughtful amenities and top-rated service.</p>
       
       <form className='bg-white/30 backdrop-blur-md shadow-lg  text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className="h-4"/>
                    <label htmlFor="destinationInput" className="text-white">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
              
               <datalist id="destinations">
                 {cities.map((city, index)=>(
                    <option value={city} key={index}/>
                 ))}
               </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className="h-4"/>
                    <label htmlFor="checkIn" className="text-white">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className="h-4" />
                    <label htmlFor="checkOut" className="text-white">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests" className="text-white">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md mt-4 bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <img src={assets.searchIcon} alt="searchicon" className="h-7"/>
                <span>Search</span>
            </button>
        </form>
       
       
        </div>
    )
}

export default Hero;
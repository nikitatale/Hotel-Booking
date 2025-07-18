import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

export default function Testimonial(){
    return(
        <>
         <div className="mt-20 flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30">
            <Title title=" Loved by Thousands" subTitle="Discover why guests keep coming back—every stay, a story to remember."/>

            <div className="flex flex-wrap items-center gap-6 mt-20 pb-20">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <StarRating />
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
         </div>

        </>
    )
}
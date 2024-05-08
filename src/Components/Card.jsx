import React from "react";
import { FaQuoteLeft, FaQuoteRight, } from "react-icons/fa";

function Card({review}){
    return(
        <div className="flex flex-col relative justify-center items-center ">
         <div className="absolute top-[-2.7rem] left-0 z-[10] mx-auto">
            <img className=" rounded-full w-[130px] h-[130px]" 
            src={review.image} alt=""></img>
         </div>

         <div className="w-[135px] h-[135px] bg-blue-800 rounded-full absolute top-[-3.1rem] left-0 z-[5]">
             
         </div>

         <div className=" text-center">
          <h2 className=" font-bold capitalize text-2xl mt-2">{review.name}</h2>
          <p className="  text-blue-500 text-sm mt-1">{review.job}</p>

         </div>

         <div className=" text-blue-900 mx-auto mt-5">
         <FaQuoteLeft/>
         </div>
         <div className=" flex flex-col text-center mt-4  text-slate-600">
            {review.text}
         </div>
         <div className=" text-blue-900 mx-auto mt-5">
            <FaQuoteRight/>
         </div>

         








        </div>
    )
}

export default Card;

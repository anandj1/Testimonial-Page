import React, { useState } from "react";
import Card from "./Card";
import{FaChevronLeft,FaChevronRight} from "react-icons/fa";

function Testimonial({reviews}){
  const [index,setIndex]=useState(0);

  function Lefthandler(){
    if(index-1<0){
      setIndex(reviews.length-1);
    }
    else{
      setIndex(index-1);
    }

  }
  function Righthandler(){
    if(index+1>=reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }


  }
  function SurpriseHandler(){
   let ran_index=Math.floor(Math.random()*reviews.length);
   setIndex(ran_index);
   

  }
  
  
  return(
    <div className="w-[75px] md:w-[750px] bg-white flex flex-col justify-center items-center mt-10 rounded-md py-10 px-4 hover:shadow-xl transition-all duration-500 ">
       
      
       <Card review = {reviews[index]}/>
       <div className="flex flex-col justify-center items-center">
       <div className="flex text-2xl mt-5 gap-10 text-violet-400 ">
         <div>
         <button  onClick={Lefthandler}
         className="hover:text-violet-600 cursor-pointer">
                <FaChevronLeft/>
            </button>
         </div>
         <div>
         <button onClick={Righthandler}
          className="hover:text-violet-600 cursor-pointer">
                <FaChevronRight/>
            </button>
         </div>
         
           
            
            
           
         

         </div>
         

         
         <div>
            <button onClick={SurpriseHandler} 
            className=" p-3 bg-violet-600 rounded-md w-[10rem]  text-white font-semibold hover:bg-violet-700 mt-5 shadow-md shadow-gray-600">
                Surpise Me
            </button>
         </div>
         </div>

    </div>

  
 
  )
}

export default Testimonial;

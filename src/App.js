import React from "react";
import Testimonial from "./Components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
    <div className=" flex flex-col justify-center items-center  bg-blue-200 w-[100vw] h-[100vh] ">
     <div>
      <h1 className=" font-bold text-4xl"> Our Testimonial</h1>
     </div>
     <div className=" bg-violet-500 h-[2.8px] w-[150px] mt-1.5"> </div>
     <div>
     <Testimonial reviews = {reviews}/>

    







      </div>
    </div>
  );
};

export default App;

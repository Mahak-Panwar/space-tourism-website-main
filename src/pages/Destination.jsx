import React ,{useState} from 'react'
import {data} from "../utils/data.js";
import { i } from 'framer-motion/client';
import { button } from 'framer-motion/m';
const Destination = () => {
const [index, setIndex] = useState(0);
  let destination = data[0].destinations;
  let tabs = [
    "MOON",
    "MARS",
    "EUROPE",
    "TITAN"
  ]
  return (
 <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>01 
        PICK YOUR DESTINATION</h1>

   
      <div className='my-8 mx-auto lg:flex'>
              <img src={destination[index].images.png} alt="" />
                   <div>
                     <div className='flex gap-3'>
                               {tabs.map((tab,i) =>{
                                 return(
                                   <button onClick={() => setIndex(i)}  className={`py-3  ${index ===i ? "border-b-2 border-white": ""}`}>
                                     {tab}
                                   </button>
                                 )
                               })}
                             </div>
                                   <div className='mx-8'>
                                     <h2>{destination[index].name}</h2>
                                     <p >{destination[index].description} </p>
                                   </div>
                   </div>
          
      </div>
    </div>
    
  )
}

export default Destination

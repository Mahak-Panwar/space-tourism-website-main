import React, { useState } from 'react'
import { data } from "../utils/data.js";
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
    <div className='flex flex-col justify-center items-center px-10'>
      <h1 className='text-2xl self-start mb-12'>01
        PICK YOUR DESTINATION</h1>


      <div className='my-8 lg:mx-auto text-center
       px-11 lg:flex gap-20'>
        <img src={destination[index].images.png} alt="" width={
          550} height={350} className='mx-auto'/>
        <div className='flex flex-col  items-center lg:items-start'>
          <div className='flex gap-2 sm:gap-8'>
            {tabs.map((tab, i) => {
              return (
                <button onClick={() => setIndex(i)} className={`py-3 text-lg mt-9 ${index === i ? "border-b-2 border-white" : ""}`}>
                  {tab}
                </button>
              )
            })}
          </div>
          <div className='text-center md:text-left'>
            <h2 className='sm:text-9xl text-6xl my-8 bellefair-regular'>{destination[index].name}</h2>
            <p className='max-w-[600px] mb-20'>{destination[index].description} </p>
            <hr />
<div className='flex flex-col items-center gap-12 sm:text-left my-6 sm:flex-row uppercase sm:justify-between'>
  <p>
    AVG.DISTANCE
    <br />
  <span className='text-4xl'>
    
        {destination[index].distance}
    
  </span>
  </p>
  <p>
     Est. travel time
    <br />
  
      <span className='text-4xl'>
    
        {destination[index].travel}
    
  </span>
  
  </p>
</div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Destination

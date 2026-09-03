import React, { useState } from 'react'
import { data } from "../utils/data.js";
import { motion } from "framer-motion";

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
    <motion.div className='flex flex-col px-1 my-24'
     initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6 }} >
      <h1 className='text-2xl md:self-start mb-12 text-center md:ml-24 text-[#dfe1e9] '><span className='mx-3 text-gray-500'>01</span>
        PICK YOUR DESTINATION</h1>


      <div className='my-8  text-center
       lg:flex justify-around items-center '>
        <motion.img src={destination[index].images.png}  width={
          500} height={400}  className='mx-auto lg:mx-1'
           key={destination[index].images.png} // key change triggers animation
    
    alt={destination[index].name}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    />
        <div className='flex flex-col  items-center lg:items-start lg:mx-2 '>
          <div className='flex gap-2 sm:gap-8'>
            {tabs.map((tab, i) => {
              return (
                <button onClick={() => setIndex(i)} className={`py-3 text-lg mt-9 ${index === i ? "border-b-2 border-white" : ""}`}>
                  {tab}
                </button>
              )
            })}
          </div>
          <div className='text-center lg:text-left'>
            <h2 className='sm:text-9xl text-6xl my-8 bellefair-regular text-white'>{destination[index].name}</h2>
            <p className='max-w-[600px] mb-20'>{destination[index].description} </p>
            <hr />
<div className='flex flex-col items-center gap-12 sm:text-left my-6 sm:flex-row uppercase sm:justify-between'>
  <p>
    AVG.DISTANCE
    <br />
  <span className='text-4xl text-white'>
    
        {destination[index].distance}
    
  </span>
  </p>
  <p>
     Est. travel time
    <br />
  
      <span className='text-4xl text-white'>
    
        {destination[index].travel}
    
  </span>
  
  </p>
</div>
          </div>
        </div>

      </div>
    </motion.div>

  )
}

export default Destination

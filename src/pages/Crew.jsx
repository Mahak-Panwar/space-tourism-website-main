
import React, { useState } from 'react'
import  data  from "@/utils/data.js";
import { motion } from "framer-motion";
const Crew = () => {
  const [index, setIndex] = useState(0);
  let crew = data[0].crew;
  let tabs = [
    "DOUGLAS HURLEY",
    "MARK SHUTTLEWORTH",
    "VICTOR GLOVER",
    "ANOUSHEH ANSARI"
  ]
  return (
    <motion.main className='md:mx-20 mx-auto my-24'
      initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6 }}>
      <h1 className='uppercase md:text-2xl text-xl mb-16 text-center md:text-left md:*:ml-24 text-[#dfe1e9]'>
        <span className='mx-3 text-gray-500'>02</span> Meet your crew
      </h1>
      <div className='my-8 text-center
       px-11 flex flex-col-reverse  gap-2 sm:flex-col  lg:flex-row justify-between items-center '>
        
        <div className='flex flex-col  items-center md:items-start'>
           
          <div className='text-center md:text-left'>
             <p className='my-3 text-3xl break-words px-2 text-gray-400'>
                  {crew[index].role}
              </p>
            <h2 className='text-4xl mb-6 bellefair-regular px-2 text-white'>{crew[index].name}</h2>
            <p className={`max-w-[600px] min-w-2xs mb-20 text-sm md:text-lg ${crew[index].name === "MARK SHUTTLEWORTH" ? "px-3" : "px-1"} `}>{crew[index].bio} </p>
            
          </div>
        <div className='flex gap-8'>
            {tabs.map((tab, i) => {
              return (
                <button key={i} onClick={() => setIndex(i)} className={`border-0 rounded-full p-1 xl:p-1.5 aspect-[1]  cursor-pointer transition-colors duration-300 ${index === i ? "bg-white" : "bg-white/25"}`}>
                  
                </button>
              )
            })}
          </div>
        </div>
<motion.img src={crew[index].images.webp} key={crew[index].images.webp} // key change triggers animation
    
    alt={crew[index].name}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}   width={400}  />
      </div>
    </motion.main>
  )
}

export default Crew


import React,{useState} from 'react'
import  data  from "../utils/data.js";
import { motion } from "framer-motion";
const Technology = () => {
  const [index, setIndex] = useState(0);
    let technology = data[0].technology;
    let tabs = [
      "LAUNCH VEHICLE",
      "SPACEPORT",
      "SPACE CAPSULE"
    ]
  return (
    <motion.main className='lg:ml-28 my-24 '   initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6 }}>
      <h1 className='uppercase text-2xl my-24 mb-35 text-center lg:text-left text-[#dfe1e9]'>
         <span className='mx-3 text-gray-500'>03</span> Space launch 101
      </h1>
      <div className='flex lg:flex-row-reverse flex-col gap-10 justify-between '>
        <picture className=' ' >
     <motion.source media="(min-width: 1024px)" srcSet={technology[index].images.portrait} width={500}   key={technology[index].images.portrait} // key change triggers animation
    
    alt={technology[index].name}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}/>
     <motion.img src={technology[index].images.landscape} width={700} height={600} key={technology[index].images.landscape} // key change triggers animation
    
    alt={technology[index].name}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}  className=' w-full  object-cover'/>
        </picture>
        
        <div className='flex flex-col lg:flex-row gap-16 justify-center lg:items-start'>
          <div className='flex gap-6 justify-center lg:flex-col '>
                <button onClick={() => setIndex(0)} className={`p-8 text-2xl font-bold rounded-[100%] bg-transparent border-1 
                  ${index === 0 ? "bg-white text-black" : "bg-black"}`}>
        1
                </button>
                <button onClick={() => setIndex(1)} className={`p-8 text-2xl font-bold rounded-[100%] bg-transparent border-1 
                  ${index === 1 ? "bg-white text-black" : "bg-black"}`}>
        2
                </button>
                <button onClick={() => setIndex(2)} className={`p-8 text-2xl font-bold rounded-[100%] bg-transparent border-1  
                ${index === 2 ? "bg-white text-black" : "bg-black"}`}>
        3
                </button>
                
          </div>
          <div className='text-center lg:text-left'>
            <p className='uppercase'>
              The terminology...
            </p>
            <h2 className='text-6xl my-4 bellefair-regular text-white'>{technology[index].name}</h2>
            <p className='lg:max-w-lg mt-8'>{technology[index].description}</p>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default Technology

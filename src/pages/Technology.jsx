import React,{useState} from 'react'
import { data } from "../utils/data.js";
const Technology = () => {
  const [index, setIndex] = useState(0);
    let technology = data[0].technology;
    let tabs = [
      "LAUNCH VEHICLE",
      "SPACEPORT",
      "SPACE CAPSULE"
    ]
  return (
    <main>
      <h1 className='uppercase'>
         03 Space launch 101
      </h1>
      <div>
        <img src="" alt="" />
        <div>
          <div className='flex gap-8'>
    
              
                <button onClick={() => setIndex(0)} className="p-6 rounded-[100%] bg-transparent border-1  focus:bg-white active:bg-white">
        0
                </button>
                <button onClick={() => setIndex(1)} className="p-6 rounded-[100%] bg-transparent border-1 ">
        1
                </button>
                <button onClick={() => setIndex(2)} className="p-6 rounded-[100%] bg-transparent border-1 ">
        2
                </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Technology

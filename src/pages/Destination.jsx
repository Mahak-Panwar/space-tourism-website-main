import React ,{useState} from 'react'
import data from "../utils/data.jS";
import { i } from 'framer-motion/client';
const Destination = () => {
const [index, setIndex] = useState(0);
  let destination = data[0].destinations[index];
  return (
 <div className=''>
      <h1>01 PICK YOUR DESTINATION</h1>
      <div>
        {data.map((d,i) => {
          return(
            <div key={i}>
              <img src={data[i].destinations[i].images.png } alt="" />
              </div>
          )
        })}
      </div>
    </div>
    
  )
}

export default Destination

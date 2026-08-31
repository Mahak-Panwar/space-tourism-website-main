import React, {useState} from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [index, setIndex] = useState(0);
  const tabs = [
    {id: "00", 
      title:"HOME", 
      path:"/" 
    },
    {id: "01", 
      title:"DESTINATION", 
      path:"/destination" 
    },
    {id: "02", 
      title:"CREW", 
      path:"/crew" 
    },
    {id: "03", 
      title:"TECHNOLOGY", 
      path:"/technology" 
    },
  ]
  return (
    <div className='flex p-2 mb-24 text-white justify-between items-center w-full '>
      <img src="/public/assets/shared/logo.svg" alt="log" />
      <div className="xl:block hidden bg-white/25 h-px md:flex-1 xl:-mr-10 xl:ml-20 z-20 "></div>
      <div>
        
      </div>
      <ul className='bg-white/5 backdrop-blur-sm max-w-2xl h-20 lg:w-2xl md:flex hidden justify-evenly '>
        {tabs.map((tab,i) =>{
              return ( <li key={i}  className={` flex items-center ${index=== i ? "border-b-2 md:border-b-3 md:border-r-0 border-r-4 border-white/50 ": ""}`}  >
                <Link 
                          to={tab.path}
                          onClick={() => setIndex(i)} 
                        className="
                       h-full flex items-center">
                        <span className='hidden lg:inline-block mx-2'>{tab.id}</span>
                         {tab.title}
                        </Link>
              </li>)
        })}
        
      </ul>
    </div>
  )
}

export default Navbar

import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
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
      <div className='bg-white/5 backdrop-blur-sm max-w-2xl p-7 lg:w-2xl md:flex justify-evenly items-center gap-8 hidden '>
        {tabs.map((tab,id) =>{
              return ( <NavLink key={id}
          to={tab.path}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500 pb-1 text-sm" : "pb-1 text-xs"
          }
        >
        <span className='hidden lg:inline-block mx-2'>{tab.id}</span>
         {tab.title}
        </NavLink>)
        })}
      </div>
    </div>
  )
}

export default Navbar

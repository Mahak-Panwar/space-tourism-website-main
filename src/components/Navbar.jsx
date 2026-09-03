import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className='flex text-white justify-between items-center w-[calc(100%-10px)] absolute md:top-0 lg:top-10 top-10 overflow-hidden '>
      <NavLink to="/" ><img src="/public/assets/shared/logo.svg" alt="log" className="md:ml-10 self-start md:self-center"/></NavLink>
      <div className="xl:block hidden bg-white/25 h-px md:flex-1 xl:-mr-10 xl:ml-20 z-20 "></div>
      <button>
        <img src="/assets/shared/icon-hamburger.svg" alt="" className='mr-10 md:hidden' onClick={() => setIsOpen(true)}/>
      </button>
<div className='bg-white/5 backdrop-blur-sm not-md:fixed top-0 right-0 h-fit lg:max-w-3xl md:mr-5 lg:mr-0'>
       <img src="/assets/shared/icon-close.svg" alt="" width={25} className={` ${(isOpen ? "ml-[80%] md:hidden pt-2.5":"hidden" )}`} onClick={() => setIsOpen(false)}/>
        <ul className='  md:h-28 lg:w-3xl flex flex-col  sm:gap-10 md:flex-row justify-evenly lg:justify-center lg:gap-4 h-screen px-1.5'>
     {/* <li className='hidden lg:block w-1/12'></li> */}
          {tabs.map((tab,i) =>{
                return ( 
  
                <li key={i}  className={` flex items-center px-16 md:p-1 ${isOpen ? "": "not-md:hidden"
  
                }`}  >
                  <NavLink
                            to={tab.path}
  
                          className={({isActive}) =>
                         `h-full flex items-center ${isActive ?"border-b-2 md:border-b-3 border-white/50": ""}`}>
                          <span className='hidden lg:inline-block mx-2'>{tab.id}</span>
                           {tab.title}
                          </NavLink>
                </li>
                )
          })}

        </ul>
</div>
    </div>
  )
}

export default Navbar

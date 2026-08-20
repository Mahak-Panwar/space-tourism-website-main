// hooks/useBackground.js
import { useEffect, useState } from "react";
import { backgrounds } from "../utils/Backgroundchange";
import { useLocation } from "react-router-dom";
export default function useBackground({ children }) {
   const location = useLocation()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 430);
const [isTablet, setIsTablet] = useState(430 < window.innerWidth <780)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  let bg
  if(isMobile){
    if (location.pathname ==="/") {
      bg= backgrounds.home.mobile
    }else if(location.pathname === "/destination"){
      bg= backgrounds.destination.mobile
    }else if(location.pathname === "/crew"){
      bg= backgrounds.crew.mobile
    }else {
      bg= backgrounds.technology.mobile
    }
 
  }else if(isTablet){
    if (location.pathname ==="/") {
      bg= backgrounds.home.tablet
    }else if(location.pathname === "/destination"){
      bg= backgrounds.destination.tablet
    }else if(location.pathname === "/crew"){
      bg= backgrounds.crew.tablet
    }else {
      bg= backgrounds.technology.tablet
    }
  }else{
    if (location.pathname ==="/") {
      bg= backgrounds.home.desktop
    }else if(location.pathname === "/destination"){
      bg= backgrounds.destination.desktop
    }else if(location.pathname === "/crew"){
      bg= backgrounds.crew.desktop
    }else {
      bg= backgrounds.technology.desktop
    }
    }
  return (<div style={{ backgroundImage: bg, minHeight: "100vh", backgroundSize: "cover" }}>
      {children}
    </div>);
}

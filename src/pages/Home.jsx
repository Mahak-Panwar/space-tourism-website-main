import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}
const Home = () => {
    const width = useWindowSize();
  const bgImage = width > 1024 ? 'bg-home-desktop.jpg' : width > 768 ? 'bg-home-tablet.jpg' : 'bg-home-mobile.jpg';
  return (
     <>

  <div style={{ backgroundImage: `url(/assets/home/${bgImage})` }} className="bg-cover bg-center  w-full text-white flex flex-col items-center justify-around min-h-screen px-6 py-10 md:px-20">
  <Navbar />
    
        <div className="flex flex-col lg:flex-row items-center gap-48 text-left max-w-full m-6">
          
          <div className='lg:w-3xl text-left flex flex-col items-start not-md:items-center '>   
             <h4 className='md:text-2xl mt-16 text-lg   '>
            SO, YOU WANT TO TRAVEL TO</h4>
            <h1 className='md:text-9xl text-8xl mb-5 font-serif '>SPACE</h1>
            <p className=' w-[500px] md:text-lg text-sm text-center p-2'>  Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!</p>
          </div>

          <div className='bg-white text-black w-52 h-56 flex items-center justify-center rounded-full mt-16 text-4xl '>Explore</div>
        </div>
      </div>
      {/* You can use the 'size' variable here if needed */}

      
    </>
  )
}

export default Home

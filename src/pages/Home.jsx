import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {

  return (
    <>
    <div className='my-24'>
      <div className='flex justify-around items-center gap-20 h-full flex-col lg:flex-row '>
        <div className='max-w-2xl text-center lg:text-left mx-1 h-full'>
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className='text-8xl my-5 bellefair-regular lg:text-9xl'>
            SPACE
          </h1>
          <p className='max-w-lg'>
            Let's face it;if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        <Link to="/destination" className='bg-white text-black px-12 py-20 text-2xl rounded-[100%]'>
          EXPLORE
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home

import React from 'react'
const Home = () => {

  return (
    <>
    <div >
      <div className='flex justify-around items-center gap-20 h-full flex-col lg:flex-row '>
        <div className='max-w-2xl text-center lg:text-left mx-1 h-full'>
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className='text-9xl my-5 bellefair-regular'>
            SPACE
          </h1>
          <p className='max-w-lg'>
            Let's face it;if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        <button className='bg-white text-black py-16 px-10 text-2xl rounded-[100%]'>
          EXPLORE
        </button>
      </div>
    </div>
    </>
  )
}

export default Home

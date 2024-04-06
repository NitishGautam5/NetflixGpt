import React from 'react'

const VideoTitle = ({title,view}) => {
  return (
    <div className=' bg-gradient-to-r from-black  pt-40 pl-14 absolute w-screen aspect-video'>
        <div>
           <p className=' mt-5 font-extrabold text-4xl text-slate-100 '>{title}</p>
          <p className=' mt-5  text-base font-semibold w-96  text-slate-200'>{view}</p>


        </div>
        <div>
           <button className=" bg-white  hover:bg-opacity-80 p-3  w-20 text-xl rounded-xl  font-bold  text-black">Play</button>
           <button className=" bg-slate-400 bg-opacity-30 p-3 m-5 w-36 text-xl font-bold  text-slate-200 rounded-xl">!  More info</button>



        </div>
    
    </div>
  )
}

export default VideoTitle
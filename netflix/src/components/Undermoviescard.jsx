import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { imageurl } from '../utils/constants/movieconst'
import { options } from '../utils/constants/options'
import VideoBackground from './VideoBackground'
const Undermoviescard = () => {
  let { id} = useParams()
  const [moviedata,setmoviedata] = useState(null)
  const results = async ()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/' +id+ '?language=en-US', options)
   const jsondata = await data.json()
   console.log(jsondata)
   setmoviedata(jsondata)
  }
  useEffect(()=>{
    results()
  },[])
  const navigate = useNavigate()
  console.log(moviedata)
  if(!moviedata) return
  const handleclick = ()=>{
       navigate("/Browse")
  }
  return (
<>

  <div className=''>
      <button className=' absolute m-3 w-40 rounded-xl z-10 p-4  border text-white text-2xl font-bold ' onClick={handleclick}>back</button>
        <div className='  absolute w-screen aspect-video bg-black bg-opacity-30'>
       
        <div className='  flex mr-[70%] mt-[10%] '>

           <img className=' h-96 p-8 ml-[20%]' src={imageurl+moviedata.poster_path} alt="" />
         <div className='mr-[20%] mt-6'>
           <p className=' font-extrabold w-96  text-3xl text-white'>{moviedata.original_title}</p>
           <div className='flex p-1'>
           {moviedata.genres.map(name=><p className=' text-white pr-2 pt-2 text-lg font-semibold'>{name.name}</p>)}
            </div>
           {<p className=' text-white pt-1 text-lg font-semibold'>rating - {moviedata.vote_average} %</p>}
           {<p className=' text-white pt-1 pb-2 text-lg font-semibold'>Votecount - {moviedata.vote_count} </p>}
          
           
          
        
           <p className=' text-lg  font-medium text-white '>OVERVIEW</p>
          <p className=' text-white w-[100%] pt-2'>{ moviedata.overview}</p>
         </div>
       
      </div>
          </div> 
     
     <VideoBackground id={id}/>
  </div>
 
</>
   
  )
}

export default Undermoviescard
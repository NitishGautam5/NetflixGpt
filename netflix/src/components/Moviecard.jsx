import React, { useState } from 'react'
import Undermoviescard from './Undermoviescard'
import { imageurl } from '../utils/constants/movieconst'
import { useNavigate, useParams } from 'react-router-dom'





const Moviecard = ({poster_path,kye}) => {
  
 
  const navigate = useNavigate()
  if(!poster_path) return
  const handleclick = ()=>{
    
   
   console.log(kye)
   const nav = "/movie/" + kye
   console.log(nav)
   navigate(nav)
  }
  
  return (
    <div className=''>
        <img  onClick={handleclick}  src={imageurl + poster_path} alt="movie image"  className=' w-32 p-3 '/>
         
    </div>
  )
}

export default Moviecard
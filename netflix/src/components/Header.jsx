import React from 'react'
import { UseSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {tooglegpt} from '../utils/gptslice'
const Header = () => {
  const showgpt = useSelector(store => store.gpt.showgpt)
  
  const user  = useSelector(store => store.user )
  
  const navigate = useNavigate()
  const handlesignout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

    navigate('/')
  }
  const dispatch = useDispatch()
  const handleclickGPT = ()=>{
      dispatch(tooglegpt())
  }
  return (
    <div className=''>
        <div className=' flex justify-between h-20 w-screen z-10  absolute  bg-gradient-to-b from-black'>
          
           <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt=""  className=' h-20 z-absolute'/>
           {user  && (
           
           <div className='flex'>
           <button className=' bg-white   font-extrabold p-2 rounded-lg  hover:bg-opacity-55 text-lg m-4 ' onClick={handleclickGPT}>{showgpt == true ? "Homepage" : "Search"}</button>
           <p  className='m-7 text-xl font-extrabold text-slate-50'>Wellcome ! {user.displayName}</p>
            <button onClick={handlesignout} className=' bg-red-600 p-2  m-5 font-bold rounded-lg text-slate-100'>Signout</button>
      
           </div>) } </div>
       
    </div>
  )
}

export default Header
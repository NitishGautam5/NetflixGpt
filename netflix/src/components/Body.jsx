import React, { useEffect } from 'react'
import Login from './Login'
import Header from './Header'
import Browse from './Browse'
import Undermoviescard from './Undermoviescard'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/userslice'
const Body = () => {
  const dispatch = useDispatch()
  const approuter = createBrowserRouter([
         {
          path:"/",
          element:<Login/>
         },
         {
          path:"/Browse",
          element:<Browse/>,
             
         },
         {
          path: "/movie/:id",
          element:<Undermoviescard/>,
             
         },
         
        ])

        useEffect(()=>{
         
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName} = user;
    // ...
   dispatch(adduser({uid:uid,email:email,displayName:displayName}))
  } else {
    // User is signed out
    // ...
    dispatch(removeuser())
  }
});
        })
  return (
    <RouterProvider router={approuter}>

       <div className='no-scrollbar'>
<Header/>
<Login/>


    </div>
    </RouterProvider>
   
  )
}

export default Body
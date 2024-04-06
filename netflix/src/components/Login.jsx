import React, { useRef, useState } from 'react'
import Header from './Header'
import { chackvaliddata } from '../utils/validatae'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, updateProfile } from "firebase/auth";

const Login = () => {
  const name = useRef()
  const email = useRef()
  const password = useRef()
 const navigate = useNavigate()
  const [massage,setmassage] = useState(null)
  const [sign,setsign] = useState(true)
  const toggle = ()=>{
          setsign(!sign)
  }
  const handlelogin = ()=>{
       const errmassage = chackvaliddata(email.current.value)
      
       setmassage(errmassage)
       if(massage) return
           
       if(!sign)
       {
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           // Signed up 
        
updateProfile(auth.currentUser, {
  displayName:name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
           const user = userCredential.user;
           // ...
        
           navigate("/Browse")
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           // ..
           setmassage(errorCode+"-" +errorMessage)
         });


        
       }

       else{
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
           // ...
         
           navigate("/Browse")
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setmassage(errorCode +errorMessage)
         });
       }
  }
  return (
     <>
     <Header/>
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className=' z-0 absolute h-screen w-screen'/>  
        
     <form  onSubmit={(e)=>e.preventDefault()} action="" className=' w-96  m-36 mx-auto left-0 right-0 bg-black absolute bg-opacity-80 '>
          
        <p className=' mt-4 mb-4 ml-10 text-xl font-bold text-slate-100 '>{sign==true ? "Sign in" : "Sign up"}</p>
        { sign==false && <input className=' border bg-gray-950 bg-opacity-60 p-2 mt-2 mb-3 ml-10 rounded-lg bg-transparent text-slate-200' type="text"  placeholder='Name' ref={name} />
       }
        <input className=' border bg-gray-950 bg-opacity-60 p-2 mt-2 mb-3 ml-10 rounded-lg bg-transparent text-slate-200' type="text"  placeholder='Email address' ref={email}/>
        <input className=  ' border bg-gray-950 bg-opacity-60 p-2 ml-10 mb-3 mt-3 rounded-lg text-slate-100' type="text"  placeholder='password' ref={password}/>
        <p className='ml-10 cursor-pointer cur  font-medium  text-red-700 '>{massage}</p>
        <button onClick={handlelogin} className=' w-48 h-10 ml-10 font-bold  text-slate-50 bg-rose-600  p-2 m-4 rounded-lg'>{sign==true ? "Sign in" : "Sign up"}</button>
       
        <p  onClick={toggle} className=' mb-4 ml-10 cursor-pointer cur  font-medium text-slate-100 ' >  {sign==true ? "new to netflix? sign up" : "Already user?"}</p>
     </form>


     
     </>
    
  )
}

export default Login
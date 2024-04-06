import React from 'react'
import GptSuggesion from './GptSuggesion'
import Gptsearchbar from './gptsearchbar'
const GPT = () => {
  return (
    
    <div>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className=' -z-10  fixed h-screen w-screen'/>  
        
        <Gptsearchbar/>
        <GptSuggesion/>


    </div>
  )
}

export default GPT
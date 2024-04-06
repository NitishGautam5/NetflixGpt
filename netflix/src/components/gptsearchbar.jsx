import React, { useEffect, useRef } from 'react'
import { options } from '../utils/constants/options'
import gptslice, { addgptmovie } from '../utils/gptslice'
import OpenAI from 'openai';
import { useDispatch } from 'react-redux';
const Gptsearchbar = () => {
  const dispatch = useDispatch()
  const fetchmovie = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options)
    const json = await data.json()
     

    return json.results
       
  }
  const serchtext = useRef()
 
  const Quary = "act as a movie recomendation system and suggest movies for the query" 
  const handlegptserch = async()=>{
    const query = "Act as a Movie Recommendation system and suggest some movies for the query " + serchtext.current.value + "only give me names of movies, comma seperarated like the example given ahead .Andaz Apna Apna,Hera Pheri ,Chupke Chupke ,Golmaal: Fun Unlimited ,3 Idiots" ;

    const openai = new OpenAI({
      apiKey:'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', // This is the default and can be omitted
      dangerouslyAllowBrowser: true 
    });

    async function main() {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content:query }],
        model: 'gpt-3.5-turbo',
      });
      const tmdbdata = chatCompletion.choices[0].message.content.split(",")
      const maindata =  tmdbdata.map((movie) => fetchmovie(movie))
      console.log(maindata)
      const ddd = await Promise.all(maindata)
      console.log(ddd)
      console.log (tmdbdata)
    dispatch(addgptmovie({tilte:tmdbdata,movies:ddd}))
    }
    
    main();
  
  }
  
  return (
    <div className=' flex w-[100%] justify-center'>
        <form action="" onSubmit={(e)=>e.preventDefault()} className=''>\
        <div className=' mt-28 p-2   flex justify-center bg-black ' >
           <input  placeholder='enter what you want' type="text"  className='p-1 w-96 mr-10  text-xl font-extrabold   text-black' ref={serchtext}/>
             <button  onClick={handlegptserch} className='bg-red-600 w-28 text-lg font-extrabold rounded-lg  text-white'>Search</button>
       
        </div>
            </form>
    
    </div>
  )
}

export default Gptsearchbar
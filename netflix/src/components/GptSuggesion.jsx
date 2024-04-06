import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'
const GptSuggesion = () => {
  const gptmovies = useSelector(store =>store.gpt)
  
  
  const movie=gptmovies.gptmoive
  if(!movie) return null
  console.log(movie.movies)
  const title= movie.tilte
  console.log(title)
  return (
          <div className=' bg-black  bg-opacity-80' >
          {movie.movies.map((movies,index)=><Movielist movies={movies} title={title[index]} />)}
          </div>
   
  )
}

export default GptSuggesion
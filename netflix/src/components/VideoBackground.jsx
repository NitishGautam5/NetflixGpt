import React, { useEffect } from 'react'
import { options } from '../utils/constants/options'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utils/movieslice'
const VideoBackground = ({id}) => {
  const Trailer_video = useSelector(store => store.movies.Trailer_video)

  const dispatch = useDispatch()
  const getMovieVideo = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options)
    const jsondata = await data.json()
    console.log(jsondata.results.length)
    if(jsondata.results.length==0) return 
   
    const trailer = jsondata.results.filter(video => video.type=="Trailer")
    if(!trailer) return trailer= jsondata.results[1]
    
   
    const trailer_kye=trailer[0].key
   
    dispatch(addTrailer(trailer_kye))
  }
  useEffect(()=>{  
    getMovieVideo()
  },[])
  
  return (
    <div><iframe
      className=' w-screen aspect-video'
      src={"https://www.youtube.com/embed/" + Trailer_video + "?autoplay=1&mute=1"}
      title="YouTube video player"
      
      
      allow="allowfullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
  )
}

export default VideoBackground
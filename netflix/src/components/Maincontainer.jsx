import React from 'react'
import { useSelector } from 'react-redux'
import appstore from '../utils/appstore'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
const Maincontainer = () => {
     const movies = useSelector( appstore => appstore.movies.Nowplayingmovies)
     if(movies==null) return

     const mainmovie = movies[0]
     const {id,original_title,overview} = mainmovie
   
  return (
    <>
    <VideoTitle title={original_title} view={overview}/>
    <VideoBackground id={id}/>
    </>
  )
}

export default Maincontainer
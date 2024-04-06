import React from 'react'
import { options } from '../constants/options'
import { json } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addnowplaying } from '../movieslice'
import { useEffect } from 'react'
const useNowPlaying = () => {
    const dispatch = useDispatch()
    const resentmovielist = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      const jsondata = await data.json()
      console.log(jsondata.results)
      dispatch(addnowplaying(jsondata.results))
    }
  
    useEffect(()=>{
      resentmovielist()
    },[])
}

export default useNowPlaying
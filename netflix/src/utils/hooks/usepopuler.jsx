import { options } from '../constants/options'
import { json } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addnowplaying } from '../movieslice'
import { addtrending } from '../movieslice'
import { addpopular } from '../movieslice'
import { useEffect } from 'react'
const usePopular = () => {
    const dispatch = useDispatch()
    const Trendingmovielist = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const jsondata = await data.json()
      console.log(jsondata.results)
      dispatch(addpopular(jsondata.results))
    }
  
    useEffect(()=>{
      Trendingmovielist()
    },[])
}

export default usePopular
import { options } from '../constants/options'
import { json } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addnowplaying } from '../movieslice'
import { addtrending } from '../movieslice'
import { addupcoming } from '../movieslice'
import { useEffect } from 'react'
const useUpcoming = () => {
    const dispatch = useDispatch()
    const Trendingmovielist = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      const jsondata = await data.json()
      console.log(jsondata.results)
      dispatch(addupcoming(jsondata.results))
    }
  
    useEffect(()=>{
      Trendingmovielist()
    },[])
}

export default useUpcoming
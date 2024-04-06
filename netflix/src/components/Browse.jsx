import React, { useEffect } from 'react'
import Header from './Header'
import Seconderycontainer from './Seconderycontainer'
import useNowPlaying from '../utils/hooks/useNowPlaying'
import Maincontainer from './Maincontainer'
import useTrending from '../utils/hooks/usetrending'
import useUpcoming from '../utils/hooks/useupcoming'
import usePopular from '../utils/hooks/usepopuler'
import GPT from './GPT'
import { useSelector } from 'react-redux'
const Browse = () => {
  const showgpt = useSelector(store => store.gpt.showgpt)
  console.log(showgpt)
  useNowPlaying()
  useTrending()
  useUpcoming()
  usePopular()

  return (
    <>
     <Header/>
      {showgpt==true ? <GPT/> : <><Maincontainer/>
    <Seconderycontainer/></>}
    
    </>
   
  )
}

export default Browse
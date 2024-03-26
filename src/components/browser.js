import React from 'react'
import Header from './header'
import MainContainer from './mainContainer'
import SecondaryContainer from './secondaryContainer'
import useMovieTrailer from '../hooks/useMovieTrailer'

const Browser = () => {
  useMovieTrailer();
  return (
    <div className='browser'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
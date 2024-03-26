import React from 'react'

const MovieCards = ({posterPath,title}) => {
    const img_url="https://image.tmdb.org/t/p/w500"
  return (
    <div className='MoviePoster'>
        <img src={img_url+posterPath}></img>
        <p>{title}</p>
    </div>
  )
}

export default MovieCards
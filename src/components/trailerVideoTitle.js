import React from 'react'

const TrailerVideoTitle = (props) => {
    const {overview,title}=props
  return (
    <div className='trailerVideoTitle'>
        <h2>{title}</h2>
        <p>{overview}</p>
    </div>
  )
}

export default TrailerVideoTitle
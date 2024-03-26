import React from 'react'
import MovieList from './movieList';
import { useSelector } from 'react-redux';
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  usePopularMovie()
  useTopRated()
  useUpcoming()

  return (
    <div>
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovie}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRated}/>
      <MovieList title={"Up Coming"} movies={movies.upComing}/>
    </div>
  )
}

export default SecondaryContainer;
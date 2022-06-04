import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddMovie from './AddMovie'
import FilterMovies from './FilterMovies'
import MovieCard from './MovieCard'

export default function MovieList({ deleteMovie ,addMovie}) {
  const Movies = useSelector((state)=>state.MovieReducer.movies);
  console.log(Movies)

  const [filtered , setFilterd] = useState('')
  const [star , setStar] = useState(0)
  // var filteredMovies = movies.filter((movie)=> movie.title.toLowerCase().includes(filtered.toLocaleLowerCase()))
  // if(star !== 0){filteredMovies = movies.filter((movie)=>   movie.rate ==star )}
      
  return (
    <div>
      <FilterMovies setFilterd={setFilterd} setStar={setStar}/>
        {Movies.map((movie) => {
          return(
            <div>
               
               <MovieCard movie={movie} key={movie.id} />
               
            </div>
            
        )})}
        <AddMovie  />
    </div>
  )
}

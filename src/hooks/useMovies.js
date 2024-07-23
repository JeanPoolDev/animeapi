import withNoResults from '../mocks/noResult.json'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  
  const movies = responseMovies.data
  
  const mappedMovies = movies?.map(movie => ({
    id: movie.mal_id,
    title: movie.title,
    fecha: movie.year,
    img: movie.images.jpg.image_url
  }))

  const getMovies = () => {
    if( search ) {
      fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
      .then(res => res.json())
      .then(data => {
        setResponseMovies(data)
      })
    } else {
      setResponseMovies(withNoResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
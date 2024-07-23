function ListOfMovies ({ movies })  {
  return (
    movies.map(movie => (
      <div className="flex flex-col items-center justify-center" key={movie.id}>
        <p className="text-xl font-bold">{movie.title}</p>
        <p className="text-lg font-semibold">{movie.fecha}</p>
        <img src={movie.img} alt={movie.title} />
      </div>
    )) 
  )
}

function NoMovies () {
  return (
    <p>No hay Animes</p>
  )
}

export function Movies ({ movies }) {

  const hasMovies = movies?.length > 0

  return (
    hasMovies 
      ? <ListOfMovies movies={movies}/>
      : <NoMovies />
  )
}
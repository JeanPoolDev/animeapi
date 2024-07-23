import { useEffect, useState, useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [search, setSearch ] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(() => {

    if(firstInput.current ){
      firstInput.current = search === ''
      return
    }

    if(search === ''){
      setError('Ingrese un nombre')
      return
    }

    setError(null)
  },[search])

  return { search, setSearch, error }
}

function App() {

  const {search, setSearch, error} = useSearch()
  const { movies, getMovies } = useMovies({search})

  const handleSumit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const value = event.target.value
    if (value.startsWith(' ')) return
    setSearch(value)
  }

  return (
    <>
      <header className='max-w-3xl m-auto py-10'>
        <h1 className='text-4xl font-semibold text-center my-4'>Buscador de Animes</h1>

        <form onSubmit={handleSumit} className='flex gap-4'>
          <input 
            type="text"
            value={search}
            className='w-full flex-grow p-2 rounded-lg'
            onChange={handleChange} 
            placeholder="kimetsu no yaeba, shingeki, timoteo, etc"/>
          <button className='border border-black p-2 rounded-lg
          hover:bg-black hover:text-white'>Buscar</button>
        </form>

        {error && <p className='text-red-600'>{error}</p>}
      </header>

      <main className='max-w-3xl m-auto'>
       <div className='grid grid-cols-3 text-center gap-6'>
        <Movies movies={movies}/>
       </div>
      </main>    
    </>  
  )
}

export default App

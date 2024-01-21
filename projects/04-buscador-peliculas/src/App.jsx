import { useEffect, useState, useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import './App.css'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ' '
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número.')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)

  }, [search])

  return { search, updateSearch, error }

}


function App() {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()

    // //de forma no controlada para varios input
    // const data = Object.fromEntries(new window.FormData(event.target))

    console.log({ search })
  }

  const handleChange = (event) => {
    // const newQuery = event.target.value
    // setQuery(newQuery)
    updateSearch(event.target.value)

  }



  return (
    <div>
      <header>
        <h1>BUscador de películas</h1>
        <form className="form" onSubmit={handleSubmit} >
          <input
            // para la forma controlada
            onChange={handleChange}
            value={search}
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            name="query" type="text" placeholder='Avengers, Matrix, etc...' />

          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
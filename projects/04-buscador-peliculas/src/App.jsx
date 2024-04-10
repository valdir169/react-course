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
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div>
      <header>
        <h1>BUscador de películas</h1>
        <form className="form" onSubmit={handleSubmit} >
          <input
            onChange={handleChange}
            value={search}
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            name="query" type="text" placeholder='Avengers, Matrix, etc...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ?
          <div style={{ height: '80vh', color: 'cyan', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Cargando...</p>
          </div>

          : <Movies movies={movies} />
        }

      </main>
    </div>
  )
}

export default App
function ListOfMovies({ movies }) {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                </li>
            ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraro peliculas para esta búsqueda</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies.length > 0

    return (
        hasMovies
            ? <ListOfMovies  movies={movies} />
            : <NoMoviesResults />
    )
}
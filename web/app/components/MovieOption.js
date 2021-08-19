import React from 'react'

function MovieOption({ movie }) {
    return (
        <div>
            <span>{movie.title} - {movie.year}</span>
        </div>
    )
}

export default MovieOption

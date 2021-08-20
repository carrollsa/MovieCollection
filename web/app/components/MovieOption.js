import React from 'react'
import PropTypes from 'prop-types'

function MovieOption({ movie }) {
    return (
        <div>
            <span>{movie.title} - {movie.year}</span>
        </div>
    )
}

MovieOption.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieOption

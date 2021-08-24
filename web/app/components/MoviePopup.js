import React from 'react'
import Details from './Details'
import ThemeContext from '../contexts/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating'
import Tooltip from './Tooltip'
import { postRating } from '../utils/movieClient'
import PropTypes from 'prop-types'

function MoviePopup({ movie, setPopup }) {
    const theme = React.useContext(ThemeContext)

    const [showNewRating, setShowNewRating] = React.useState(false)

    const { Title, Poster, Year, Plot } = movie

    const ratingClick = (val) => {
        movie.userRating = val
        postRating(movie.id, val)
        setShowNewRating(false)
    }

    return (
        <section className='popup'>
            <div className='content'>
                <h2>
                    {Title}<span> ({Year})</span>
                </h2>
                <div>
                    {!showNewRating
                        ? <Tooltip text='Change rating'>
                            <div className='rating' onClick={() => setShowNewRating(true)}>
                                <span>{movie.userRating} <FontAwesomeIcon icon={faStar} color='yellow' /></span>
                            </div>
                        </Tooltip>
                        : <div className='rating'>
                            <StarRating
                                rating={movie.userRating}
                                onRating={ratingClick}
                            />
                        </div>
                    }
                </div>
                <div className='info'>
                    <img src={Poster} alt={`poster for ${Title}`} />
                    <div className='details'>
                        <Details movie={movie} />
                    </div>
                </div>
                <div className='plot'>
                    <p>{Plot}</p>
                </div>
                <button
                    className='close'
                    onClick={() => setPopup({})}
                >
                    Close
                </button>
            </div>
        </section>
    )
}

MoviePopup.propTypes = {
    movie: PropTypes.object.isRequired,
    setPopup: PropTypes.func.isRequired
}

export default MoviePopup

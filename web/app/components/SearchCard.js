import * as React from 'react'
import ThemeContext from '../contexts/theme'
import { FaClock, FaFilm, FaCheck } from 'react-icons/fa'
import { VscMegaphone } from 'react-icons/vsc'
import { convertRunningTime } from '../utils/math'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import { postRating } from '../utils/movieClient'

export default function SearchCard({ id, movie }) {
    const theme = React.useContext(ThemeContext)

    const [rating, setRating] = React.useState(0)
    const [submitButtonText, setSubmitButtonText] = React.useState('Add to collection')

    //Is there a way to make sure duplicate objects were never added in the first place?
    const ratingClick = (val) => {
        setRating(val)
    }

    const handleSubmit = () => {
        postRating(id, rating)
            .catch((e) => console.log('failure'))
        setSubmitButtonText(<FaCheck color='green' />)
    }

    return (
        <React.Fragment>
            <div className='card-preview bg-light medium-text'>
                <h4 className='header-sm center-text'>
                    <a className='link' href={`https://www.imdb.com/title/tt${id}/`} target="_blank" >{movie.Title}</a>
                </h4>
                <div className='card-preview-body'>
                    {movie.Poster && <img
                        className='movie-poster'
                        src={movie.Poster}
                        alt={`poster for ${movie.Title}`}
                    />}
                    <ul className='no-bullets card-list flex-center column'>
                        {movie.Director &&
                            <li>
                                <VscMegaphone color='rgb(114,34,199)' />
                                {movie.Director}
                            </li>
                        }
                        {movie.Year &&
                            <li>
                                <FaFilm color='rgb(129, 195, 245)' size={22} />
                                {parseInt(movie.Year)}
                            </li>
                        }
                        {movie.Runtime &&
                            <li>
                                <FaClock color='rgb(219,155,59)' size={22} />
                                {convertRunningTime(parseInt(movie.Runtime))}
                            </li>
                        }
                    </ul>
                    <div className='flex-center column'>
                        <StarRating
                            rating={rating}
                            onRating={ratingClick}
                        />

                        {(rating !== 0) &&
                            <button
                                className={`btn top15 ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                                value='Add to my collection'
                                onClick={handleSubmit}
                            >
                                {submitButtonText}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

SearchCard.propTypes = {
    id: PropTypes.string.isRequired,
    movie: PropTypes.object.isRequired
}
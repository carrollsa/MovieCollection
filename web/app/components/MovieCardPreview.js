import * as React from 'react'
import ThemeContext from '../contexts/theme'
import { FaClock, FaFilm, FaCheck } from 'react-icons/fa'
import { VscMegaphone } from 'react-icons/vsc'
import { fetchMovieDetails } from '../utils/movieClient'
import { convertRunningTime } from '../utils/math'
import PropTypes from 'prop-types'
import Loading from './Loading'
import Details from './Details'
import StarRating from './StarRating'

export default function MovieCardPreview({ id, title, year, runningTime, director }) {
    const theme = React.useContext(ThemeContext)

    const [rating, setRating] = React.useState(0)
    const [submitButtonText, setSubmitButtonText] = React.useState('Add to collection')

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            moviePoster: null,
            loading: false,
            error: null
        }
    )

    function fetchReducer(state, action) {
        switch (action.type) {
            case 'fetch':
                return {
                    ...state,
                    loading: true
                }
            case 'success':
                return {
                    moviePoster: action.data.Poster,
                    loading: false,
                    error: null
                }
            case 'error':
                return {
                    ...state,
                    error: action.data.error,
                    loading: false
                }
        }
    }

    React.useEffect(() =>
        fetchMovieDetails(id)
            .then((data) => dispatch({ type: 'success', data }))
            .catch((error) => dispatch({ type: 'error', error }))
        , [])

    //Is there a way to make sure duplicate objects were never added in the first place?
    const ratingClick = (val) => {
        setRating(val)
    }

    const submitRating = () => {
        const api = ('api/v1/ratings')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                movieId: id,
                ratingValue: rating
            })
        }
        fetch(api, requestOptions)
            .catch((e) => console.log('failure'))
        setSubmitButtonText(<FaCheck color='green' />)
    }

    return (
        <React.Fragment>
            <div className='card-preview bg-light medium-text'>
                {state.loading === true &&
                    <Loading text='Fetching movie details' />
                }
                <h4 className='header-sm center-text'>
                    <a className='link' href={`https://www.imdb.com/title/tt${id}/`} target="_blank" >{title}</a>
                </h4>
                <div className='card-preview-body'>
                    {state.moviePoster && <img
                        className='movie-poster'
                        src={state.moviePoster}
                        alt={`poster for ${title}`}
                    />}
                    <ul className='no-bullets card-list flex-center column'>
                        {director &&
                            <li>
                                <VscMegaphone color='rgb(114,34,199)' />
                                {director}
                            </li>
                        }
                        {year &&
                            <li>
                                <FaFilm color='rgb(129, 195, 245)' size={22} />
                                {year}
                            </li>
                        }
                        {runningTime &&
                            <li>
                                <FaClock color='rgb(219,155,59)' size={22} />
                                {convertRunningTime(runningTime)}
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
                                onClick={submitRating}
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

MovieCardPreview.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    director: PropTypes.string,
    runningTime: PropTypes.number
}
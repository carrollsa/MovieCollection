import * as React from 'react'
import ThemeContext from '../contexts/theme'
import { FaClock, FaFilm, FaStar } from 'react-icons/fa'
import { fetchMovieDetails } from '../utils/movieClient'
import { convertRunningTime } from '../utils/math'
import PropTypes from 'prop-types'
import Loading from './Loading'
import Details from './Details'
import StarRating from './StarRating'

export default function MovieCard({ id, title, year, runningTime, director, collectionView = false, userRating }) {
    const theme = React.useContext(ThemeContext)

    const [rating, setRating] = React.useState(0)
    const [showExtendedInfo, setShowExtendedInfo] = React.useState(false)

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            movieDetails: null,
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
                    movieDetails: action.data,
                    loading: false,
                    error: null
                }
            case 'error':
                return {
                    ...state,
                    error: action.data.message,
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
            .then(console.log('success'))
            .catch((e) => console.log('failure'))
    }

    const toggleExtendedInfo = () => setShowExtendedInfo(!showExtendedInfo)

    return (
        <React.Fragment>
            <div className='card bg-light medium-text' onClick={toggleExtendedInfo}>
                {state.loading === true &&
                    <Loading text='Fetching movie details' />
                }
                <h4 className='header-sm center-text'>
                    <a className='link' href={`https://www.imdb.com/title/tt${id}/`}>{title}</a>
                </h4>
                <div className='card-body'>
                    {collectionView &&
                        <h4 className='center-text bold'>
                            {userRating} <FaStar stroke='black' color="gold" />
                        </h4>
                    }
                    {state.movieDetails && <img
                        className='movie-poster'
                        src={state.movieDetails.Poster}
                        alt={`poster for ${title}`}
                    />}
                    <ul className='no-bullets card-list'>
                        {!collectionView && year &&
                            <li>
                                <FaFilm color='rgb(129, 195, 245)' size={22} />
                                {year}
                            </li>
                        }
                        {!collectionView && runningTime &&
                            <li>
                                <FaClock color='rgb(219,155,59)' size={22} />
                                {convertRunningTime(runningTime)}
                            </li>
                        }
                        {!collectionView &&
                            <li>
                                <StarRating rating={rating} onRating={ratingClick} />
                                <span>
                                    {(rating !== 0) &&
                                        <button 
                                            className={`btn top5 ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                                            onClick={submitRating}
                                        >
                                            Add to my collection
                                        </button>}
                                </span>
                            </li>
                        }
                        {collectionView &&
                            <ul>
                                {showExtendedInfo &&
                                    <li>
                                        <Details movieDetails={state.movieDetails} />
                                    </li>
                                }
                                <li>
                                    <button
                                        className={`btn btn-center ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                                        onClick={toggleExtendedInfo}
                                    >
                                        {showExtendedInfo === true
                                            ? 'Less info...'
                                            : 'More info...'
                                        }
                                    </button>
                                </li>
                            </ul>
                        }

                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    director: PropTypes.string,
    runningTime: PropTypes.number
}
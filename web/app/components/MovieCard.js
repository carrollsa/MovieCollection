import * as React from 'react'
import ThemeContext from '../contexts/theme'
import { FaClock, FaFilm, FaStar, FaCheck } from 'react-icons/fa'
import { fetchMovieDetails } from '../utils/movieClient'
import { convertRunningTime } from '../utils/math'
import PropTypes from 'prop-types'
import Loading from './Loading'
import Details from './Details'
import useHover from '../hooks/useHover'

export default function MovieCard({ id, title, year, runningTime, userRating }) {
    const theme = React.useContext(ThemeContext)

    const [hovering, attrs] = useHover()
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

    const toggleExtendedInfo = () => setShowExtendedInfo(!showExtendedInfo)

    return (
            <div className='card bg-light medium-text' onClick={toggleExtendedInfo} {...attrs}>
                {state.loading === true &&
                    <Loading text='Fetching movie details' />
                }
                <div className='card-title-container flex-center'>
                    <h4 className='header-sm center-text'>
                        <a className='link' href={`https://www.imdb.com/title/tt${id}/`} target="_blank" >
                            {showExtendedInfo
                                ? title
                                : title.length > 42
                                    ? title.substring(0, 42) + '...'
                                    : title
                            }
                        </a>
                    </h4>
                </div>
                <div className='card-body'>
                    <h4 className='center-text bold'>
                        {userRating} <FaStar stroke='black' strokeWidth={20} color="gold" />
                    </h4>
                    {state.movieDetails && <img
                        className='movie-poster'
                        src={state.movieDetails.Poster}
                        alt={`poster for ${title}`}
                    />}
                    <ul className='no-bullets card-list'>
                        <div className='row flex-center'>
                            {!showExtendedInfo && year &&
                                <li>
                                    <FaFilm color='rgb(129, 195, 245)' size={22} />
                                    {year}
                                </li>
                            }
                            {!showExtendedInfo && runningTime &&
                                <li className='left10'>
                                    <span className='left5'>
                                        <FaClock color='rgb(219,155,59)' size={22} />
                                        {convertRunningTime(runningTime)}
                                    </span>
                                </li>
                            }
                        </div>
                        {showExtendedInfo &&
                            <li>
                                <Details movie={state.movieDetails} />
                            </li>
                        }
                        {hovering &&
                            <li>
                                <button
                                    className={`btn btn-center ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                                    onClick={toggleExtendedInfo}
                                >
                                    {showExtendedInfo === false
                                        ? 'Click to expand'
                                        : 'Click to collapse'
                                    }
                                </button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
    )
}

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    director: PropTypes.string,
    runningTime: PropTypes.number
}
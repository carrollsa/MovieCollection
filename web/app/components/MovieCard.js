import * as React from 'react'
import { FaClock, FaFilm } from 'react-icons/fa'
import { VscMegaphone } from 'react-icons/vsc'
import { convertId } from '../utils/math'
import { fetchMovieDetails } from '../utils/movieClient'
import PropTypes from 'prop-types'
import Details from './Details'
import StarRating from './StarRating'

export default function MovieCard({ id, title, year, runningTime, director, collectionView = false, userRating }) {
    const [rating, setRating] = React.useState(0)
    const [movieDetails, setMovieDetails] = React.useState(null)
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
        if (action.type === 'fetch') {
            return {
                ...state,
                loading: true
            }
        } else if (action.type === 'poster success') {
            return {
                movieDetails: action.data,
                loading: false,
                error: null
            }
        } else if (action.type === 'error') {
            return {
                ...state,
                error: 'Fetch failed.',
                loading: false
            }
        }
    }
    //REFACTOR
    React.useEffect(() => 
        fetchMovieDetails(id)
            .then((data) => 
                dispatch({ type: 'success', data })
            )
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
        console.log(requestOptions)
        fetch(api, requestOptions)
            .then(console.log('success'))
            .catch((e) => console.log('failure'))
    }

    const fetchExtendedInfo = () => {
        console.log(id)
        fetchMovieDetails(id)
            .then((data) => {
                setMovieDetails(data)
            })
    }

    return (
        <React.Fragment>
            <div className={'card bg-light medium-text'}>
                <h4 className='header-sm center-text'>
                    <a className='link' href={`https://www.imdb.com/title/tt${id}/`}>{title}</a>
                </h4>
                {movieDetails && <img
                    className='movie-poster'
                    src={movieDetails.Poster}
                    alt={`poster for ${title}`}
                />}
                <ul className='no-bullets card-list'>
                    {director &&
                        <li>
                            <VscMegaphone color='rgb(114,34,199)' size={24} className='vsci-mega' />
                            <span> {director}</span>
                        </li>}
                    {year &&
                        <li>
                            <FaFilm color='rgb(129, 195, 245)' size={22} />
                            <span>{' '}{year}{'   '}</span>

                        </li>
                    }
                    {runningTime &&
                        <li>
                            <FaClock color='rgb(219,155,59)' size={22} />
                            <span>{Math.floor(runningTime / 60)}hr {runningTime % 60}min</span>
                        </li>
                    }
                    {!collectionView &&
                        <li>
                            <StarRating rating={rating} onRating={ratingClick} />
                            <span>
                                {(rating !== 0) &&
                                    <button
                                        onClick={submitRating}
                                    >
                                        Add to my collection
                                    </button>}
                            </span>
                        </li>
                    }
                    {collectionView &&
                        <ul>


                            <li>
                                Rating: {userRating}
                            </li>
                            {!movieDetails &&
                                <button
                                    onClick={fetchExtendedInfo}
                                >
                                    More info...
                                </button>
                            }

                        </ul>
                    }
                    {movieDetails &&
                        <div>
                            <Details movieDetails={movieDetails} />
                            <button>
                                Less info...
                            </button>
                        </div>
                    }
                </ul>
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
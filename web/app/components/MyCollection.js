import * as React from 'react'
import Loading from './Loading'
import { fetchRatings, fetchMovieDetails } from '../utils/movieClient'
import MovieCard from './MovieCard'
import MoviePopup from './MoviePopup'

function MyCollection() {
    const [popup, setPopup] = React.useState(null)

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            ratings: [],
            loading: true,
            error: null
        }
    )

    React.useEffect(() => {
        fetchRatings()
            .then((data) => dispatch({ type: 'success', data }))
            .catch((e) => {
                dispatch({ type: 'error' })
            })
    }, [])

    function fetchReducer(state, action) {
        switch (action.type) {
            case 'fetch':
                return {
                    ...state,
                    loading: true
                }
            case 'success':
                return {
                    ratings: action.data,
                    loading: false,
                    error: null
                }
            case 'error':
                return {
                    ...state,
                    error: 'Fetch failed.',
                    loading: false
                }
        }
    }

    function DisplayCollection() {
        return (
            <div className='collection space-around'>
                {state.ratings.map((ratingItem) => {
                    const { id, ratingValue, time, movie } = ratingItem
                    const { title, year, runningTime } = movie
                    const movieId = movie.id

                    return (
                        <li key={id} >
                            <MovieCard
                                id={movieId}
                                title={title}
                                year={year}
                                runningTime={movie.runningTime}
                                userRating={ratingValue}
                            />
                        </li>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            {state.loading === true
                ? <Loading text='Loading your collection' />
                : state.ratings.length === 0
                    ? 'Your collection is empty!'
                    : popup === null 
                        ? <DisplayCollection ratings={state.ratings} />
                        : <MoviePopup movie={popup} />
            }       
        </div>
    )
}


export default MyCollection
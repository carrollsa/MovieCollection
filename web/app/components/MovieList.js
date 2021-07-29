import * as React from 'react'
import MovieCard from './MovieCard'
import Loading from './Loading'
import { Link } from 'react-router-dom'

function MovieList({ movies, userRatings }) {
    return (
        <React.Fragment>
            <ul className='grid space-around no-bullets'>
                {movies.map((movie, index) => {
                    const { id, title, year, posterURL, runningTime, ratings } = movie
                    return (
                        <li key={id}>
                            <MovieCard
                                id={id}
                                title={title}
                                year={year}
                                posterURL={posterURL}
                                runningTime={runningTime}
                                userRatings={userRatings}
                            />
                        </li>
                    )
                })}
            </ul>
            <Link
                className='btn dark-btn btn-space'
                to={{
                    pathname: '/recommendations',
                    state: {userRatings}
                }}

            >
                Submit Ratings
            </Link>
        </React.Fragment>
    )
}

export default function MoviesToRate() {
    const [userRatings, setUserRatings] = React.useState([])

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            movies: null,
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
        } else if (action.type === 'success') {
            return {
                movies: action.data,
                error: null,
                loading: false
            }
        } else if (action.type === 'error') {
            return {
                ...state,
                error: action.error.message,
                loading: false
            }
        } else {
            throw new Error(`That action type is not supported: ${action.type}`)
        }
    }

    React.useEffect(() => {
        dispatch({ type: 'fetch' })

        fetch('api/v1/movies')
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'success', data }))
            .catch((e) => {
                console.warn(e.message)
                dispatch({ type: 'error' })
            })
    }, [])

    return (
        <React.Fragment>
            {state.loading && <Loading />}

            {state.error && <p className='center-text error'>{state.error}</p>}

            {state.movies && <MovieList userRatings={userRatings} movies={state.movies} />}
        </React.Fragment>
    )
}
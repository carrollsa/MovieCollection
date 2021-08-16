import * as React from 'react'
import Loading from './Loading'
import { fetchRatings, fetchMovieDetails } from '../utils/movieClient'
import MovieCard from './MovieCard'

function MyCollection() {
    const [movies, setMovies] = React.useState([])
    
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

    // // Dropped in favor of lazier fetch of further details
    // React.useEffect(() => {
    //     ratings.map((rating) => {
    //         fetchMovieDetails(rating.movieId)
    //             .then((fullMovie) => setMovies((movies) => {
    //                 movies.push(fullMovie)
    //             }))
    //     })
    // }, [state.ratings])

    function fetchReducer(state, action) {
        if (action.type === 'fetch') {
            return {
                ...state,
                loading: true
            }
        } else if (action.type === 'success') {
            return {
                ratings: action.data,
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

    function DisplayCollection () {
        console.log(state.ratings)
        return (
            <ul>
                {state.ratings.map((ratingItem) => {
                    const { id, ratingValue, time, movie } = ratingItem
                    const { title, year, runningTime } = movie
                    const movieId = movie.id

                    return (
                        <li key={id}>
                            <MovieCard
                                id={movieId}
                                title={title}
                                year={year}
                                runningTime={movie.runningTime}
                                collectionView={true}
                                userRating={ratingValue}
                            />
                        </li>
                    )
                })}
            </ul>
        )

    }

    return (
        <React.Fragment>
            {state.loading &&
                <Loading text='Loading your collection' />
            }

            {state.ratings.length == 0
                ? <div>
                    Your collection is empty!
                </div>
                : <div>
                    <DisplayCollection ratings={state.ratings} />
                </div>
            }
        </React.Fragment>
    )
}


export default MyCollection
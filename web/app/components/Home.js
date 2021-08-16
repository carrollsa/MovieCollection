import * as React from 'react'
import Loading from './Loading'
import PerformanceWarning from './PerformanceWarning'
import MovieCard from './MovieCard'
import { fetchMovieDetails, fetchMovieByTitle } from '../utils/movieClient'

function Home() {
    const [search, setSearch] = React.useState('')
    const [selectedId, setSelectedId] = React.useState()
    const [selectedMovie, setSelectedMovie] = React.useState(null)

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            movieOptions: [],
            display: false,
            loading: false,
            error: null
        }
    )

    const fetchPosterDetails = () => {

        fetchMovieDetails(selectedId)
            .then((data) => setSelectedMovie(data))
            //TODO: handle error
            .catch((e) => { })
    }
    
    const searchMovie = () => {
        dispatch({ type: 'fetch' })
        fetchMovieByTitle(search)
            .then(data => dispatch({ type: 'success', data }))
            .catch((error) => dispatch({ type: 'error', error }))
    }

    function fetchReducer(state, action) {
        if (action.type === 'fetch') {
            return {
                ...state,
                loading: true
            }
        } else if (action.type === 'success') {
            return {
                movieOptions: action.data,
                loading: false,
                display: true,
                error: null
            }
        } else if (action.type === 'error') {
            return {
                ...state,
                error: action.error.message,
                loading: false
            }
        }
    }

    function updateSelection({ movie }) {
        setSearch(movie.title)
        state.display = false;
        setSelectedId(movie.id)
    }

    return (
        <React.Fragment>
            <div>
                {state.loading === true
                    ? <Loading />
                    : <input
                        id='title-search'
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder='Title'
                        value={search}
                    />}
                {state.movieOptions.length > 500 &&
                    <div>
                        <PerformanceWarning text='Over 500 results. Please refine search or risk performance degradation.' />
                    </div>
                }
                <button
                    onClick={searchMovie}
                    disabled={!search}
                >
                    Search for movie
                </button>
                {state.display &&
                    <div className='auto-container'>
                        {state.movieOptions
                            .filter(({ title }) =>
                                title.toLowerCase()
                                    .indexOf(search.toLowerCase()) > -1)
                            .map((movie, index) => {
                                return (
                                    <div
                                        onClick={() => updateSelection({ movie })}
                                        className='option'
                                        key={index}
                                        tabIndex='0'
                                    >
                                        <span>{movie.title} - </span>
                                        <span>{movie.year}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                {selectedId &&
                    <div>
                        <button
                            onClick={fetchPosterDetails}
                        >
                            Fetch details
                        </button>
                    </div>
                }
                {selectedMovie &&
                    <MovieCard
                        id={selectedId}
                        title={selectedMovie.Title}
                        director={selectedMovie.Director}
                        year={parseInt(selectedMovie.Year)}
                        posterURL={selectedMovie.Poster}
                        runningTime={parseInt(selectedMovie.Runtime)}
                    />
                }
            </div>
        </React.Fragment>
    )
}

export default Home
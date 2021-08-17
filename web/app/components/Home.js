import React from 'react'
import Loading from './Loading'
import ThemeContext from '../contexts/theme'
import PerformanceWarning from './PerformanceWarning'
import MovieCard from './MovieCard'
import { fetchMovieDetails, fetchMovieByTitle } from '../utils/movieClient'

function Home() {
    const theme = React.useContext(ThemeContext)

    const [search, setSearch] = React.useState('')
    const [selectedId, setSelectedId] = React.useState()
    const [selectedMovie, setSelectedMovie] = React.useState(null)

    const inputRef = React.useRef();

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            movieOptions: [],
            display: false,
            loading: false,
            error: null
        }
    )

    React.useEffect(() => {
        inputRef.current.focus();
    }, [state.movieOptions])

    function useKey(key, callback) {
        const callbackRef = React.useRef(callback);

        React.useEffect(() => {
            callbackRef.current = callback;
        })

        React.useEffect(() => {
            function handle(event) {
                if (event.key === key) {
                    callbackRef.current(event)
                }
            }
            document.addEventListener('keypress', handle);
            return () => document.removeEventListener('keypress', handle)
        }, [key])
    }

    // //TODO: Figure out why this doesn't work? Works with enter...
    // useKey('ArrowDown', handleDown)

    // function handleDown() {
    //     let focusedElement = document.activeElement
    //     console.log('Input active')
    // }

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
        switch (action.type) {
            case 'fetch':
                return {
                    ...state,
                    loading: true
                }
            case 'success':
                return {
                    movieOptions: action.data,
                    loading: false,
                    display: true,
                    error: null
                }
            case 'error':
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

    const handleKeyPressSearch = (e) => {
        if (e.key === 'Enter') {
            searchMovie()
        }
    }

    const handleKeyPressOption = (e) => {
        if (e.key === 'Enter') {
            updateSelection({ movie })
        }
    }

    return (
        <React.Fragment>
            <div>
                {state.loading === true
                    ? <Loading />
                    : <input
                        className='searchbox'
                        id='title-search'
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder='Title'
                        value={search}
                        ref={inputRef}
                        onKeyPress={handleKeyPressSearch}
                    />}
                {state.movieOptions.length > 500 &&
                    <div>
                        <PerformanceWarning text='Over 500 results. Please refine search or risk performance degradation.' />
                    </div>
                }
                {state.display &&
                    <div className='options-container'>
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
                                        onKeyPress={handleKeyPressOption({ movie })}
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
                            className={`btn top5 ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
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
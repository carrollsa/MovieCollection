import React from 'react'
import Loading from './Loading'
import ThemeContext from '../contexts/theme'
import PerformanceWarning from './PerformanceWarning'
import MovieOption from './MovieOption'
import { fetchMovieDetails, fetchMovieByTitle } from '../utils/movieClient'
import SearchCard from './SearchCard'

function Home() {
    const theme = React.useContext(ThemeContext)

    const [search, setSearch] = React.useState('')
    const [selectedId, setSelectedId] = React.useState()
    const [selectedMovie, setSelectedMovie] = React.useState(null)
    const [optionIndex, setOptionIndex] = React.useState(null)

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

    const fetchPosterDetails = (id) => {
        fetchMovieDetails(id)
            .then((data) => setSelectedMovie(data))
            .catch((e) => dispatch({ type: 'error', error }))
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
                    ...state,
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
            case 'reset':
                return {
                    movieOptions: [],
                    display: false,
                    loading: false,
                    error: null
                }
        }
    }

    function updateSelection({ movie }) {
        setSearch(movie.title)
        state.display = false
        setSelectedId(movie.id)
        fetchPosterDetails(movie.id)
    }

    const handleKeyDownSearch = (e) => {
        if (e.key === 'Enter') {
            searchMovie()
        } else if (e.key === 'ArrowDown') {
            document.getElementById('option0').focus()
            setOptionIndex(0)
        } else if (e.key === 'ArrowUp') {
            let finalIndex = state.movieOptions.length - 1
            document.getElementById(`option${finalIndex}`).focus()
            setOptionIndex(finalIndex)
        }
    }

    const handleKeyDownOption = (e, movie) => {
        if (e.key === 'Enter') {
            updateSelection(movie)
        } else if (e.key === 'ArrowDown') {
            let newIndex
            optionIndex === state.movieOptions.length - 1
                ? (newIndex = 0,
                    document.getElementById('option0').focus(),
                    setOptionIndex(0))
                : (newIndex = optionIndex + 1,
                    document.getElementById(`option${newIndex}`).focus(),
                    setOptionIndex(newIndex))
        } else if (e.key === 'ArrowUp') {
            optionIndex === 0
                ? (document.getElementById(`option${state.movieOptions.length - 1}`).focus(),
                    setOptionIndex(state.movieOptions.length - 1))
                : (document.getElementById(`option${optionIndex - 1}`).focus(),
                    setOptionIndex((optionIndex) => optionIndex -= 1))
        }
    }

    const reset = () => {
        dispatch({ type: 'reset' })
        setSelectedId(undefined)
        setSelectedMovie(null)
        setSearch('')
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
                        autoComplete='off'
                        onKeyDown={handleKeyDownSearch}
                    />}
                {state.movieOptions.length > 50 &&
                    <div>
                        <PerformanceWarning text='Over 500 results. Please refine search or risk performance degradation.' />
                    </div>
                }
                {state.display &&
                    <div className='top5'>
                        {state.movieOptions
                            .filter(({ title }) =>
                                title.toLowerCase()
                                    .indexOf(search.toLowerCase()) > -1)
                            .map((movie, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => updateSelection({ movie })}
                                        className='option'
                                        id={`option${index}`}
                                        tabIndex='0'
                                        onKeyDown={(e) => handleKeyDownOption(e, {movie})}
                                    >
                                        <MovieOption
                                            movie={movie}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                {selectedMovie &&
                    <SearchCard
                        id={selectedId}
                        movie={selectedMovie}
                    />
                }
                {selectedMovie &&
                    <button
                        className={`btn top5 ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                        onClick={reset}
                    >
                        Clear
                    </button>
                    
                }
            </div>
        </React.Fragment>
    )
}

export default Home
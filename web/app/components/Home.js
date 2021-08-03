import * as React from 'react'
import Loading from './Loading'
import StarRating from './StarRating'
import MovieCard from './MovieCard'

function Home() {
    const [display, setDisplay] = React.useState(false)
    const [search, setSearch] = React.useState('')
    const [options, setOptions] = React.useState([])
    const [movie, setMovie] = React.useState(null)
    const [rating, setRating] = React.useState(0)
    const wrapperRef = React.useRef(null)

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            movies: [],
            loading: true,
            error: null,
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
                movies: action.movieData,
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

        fetch('v1/api/movies', {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((movieData) => dispatch({ type: 'success', movieData }))
            .catch((e) => {
                console.warn(e.message)
                dispatch({ type: error })
            })
    }, [])
    //There has to be a better way?
    React.useEffect(() => {
        state.loading === true
        const opt = []
        state.movies.map((movie) => {
            opt.push(movie.title)
        })
        setOptions(opt)
        state.loading === false
    }, [state.movies])

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return (() => {
            document.removeEventListener('mousedown', handleClickOutside)
        })
    }, [])

    const setDisplayMovie = title => {
        setSearch(title)
        setDisplay(false)
    }

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false)
        }
    }

    const handleSubmit = () => {
        let title = document.getElementById('title-search').value
        let targetMovie
        state.movies.map((movieData) => {
            if (movieData.title === title) {
                console.log('found')
                targetMovie = movieData
            }
        })
        console.log(targetMovie)
        setMovie(targetMovie)
        console.log('hi')
        console.log(movie)
    }

    return (
        <React.Fragment>
            <div ref={wrapperRef}>
                {state.loading === true
                    ? <Loading text="Loading database" />
                    : <input
                        id='title-search'
                        onClick={() => setDisplay(!display)}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder='Type to search movies'
                        value={search}
                    />}
                {search &&
                    <button
                        onClick={handleSubmit}
                    >
                        Select Movie
                    </button>
                }
                {movie &&
                    <MovieCard
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        posterURL={movie.posterURL}
                        runningTime={movie.runningTime}
                    />
                }
                {display && (
                    <div>
                        {options.filter((title) => title.toLowerCase().indexOf(search.toLowerCase()) > -1).map((value, index) => {
                            return (
                                <div className='option' key={index} onClick={() => setDisplayMovie(value)} >
                                    <span>{value}</span>
                                </div>
                            )
                        })}
                    </div>
                )}

            </div>
        </React.Fragment>
    )
}

export default Home
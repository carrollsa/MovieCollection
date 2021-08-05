import * as React from 'react'
import Loading from './Loading'
import MovieCard from './MovieCard'

function Home() {
    const [display, setDisplay] = React.useState(false)
    const [search, setSearch] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [rating, setRating] = React.useState(0)

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            movie: null,
            loading: false,
            error: null
        }
    )

    const searchMovie = () => {
        console.log(search)
        dispatch({ type: 'fetch' })
        const params = {tite: search}
        fetch('api/v1/movies?' + new URLSearchParams({
                title: search
            }))
            .then(response => response.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch(() => {
                console.log(err)
            })
    }

    function fetchReducer(state, action) {
        if (action.type === 'fetch') {
            return {
                ...state,
                loading: true
            }
        } else if (action.type === 'success') {
            return {
                movie: action.data,
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

    return (
        <React.Fragment>
            <div>
                {state.loading === true
                    ? <Loading text="Loading movie" />
                    : <input
                        id='title-search'
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder='Title'
                        value={search}
                    />}
                {search &&
                    <button
                        onClick={searchMovie}
                    >
                        Search for movie
                    </button>
                }
                {state.movie &&
                    <MovieCard
                        id={state.movie.id}
                        title={state.movie.title}
                        year={state.movie.year}
                        // posterURL={state.movie.posterURL}
                        runningTime={state.movie.runningTime}
                    />
                }
                {/* {display && (
                    <div>
                        {options.filter((title) => title.toLowerCase().indexOf(search.toLowerCase()) > -1).map((value, index) => {
                            return (
                                <div className='option' key={index} onClick={() => setDisplayMovie(value)} >
                                    <span>{value}</span>
                                </div>
                            )
                        })}
                    </div>
                )} */}

            </div>
        </React.Fragment>
    )
}

export default Home
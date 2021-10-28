import * as React from 'react'
import Loading from './Loading'
import { fetchRatings } from '../utils/movieClient'
import useKeyPress from '../hooks/useKeyPress'
import CollectionCard from './CollectionCard'
import MoviePopup from './MoviePopup'

function MyCollection() {
    const [popup, setPopup] = React.useState({})

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

    useKeyPress('Escape', () => setPopup({}))

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
                    const { id, value, movie } = ratingItem
                    const { title, year } = movie
                    const movieId = movie.id

                    return (
                        <li key={id} >
                            <CollectionCard
                                id={movieId}
                                title={title}
                                year={year}
                                runningTime={movie.runningTime}
                                userRating={value}
                                setPopup={setPopup}
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
                    : typeof popup.Title != 'undefined' 
                        ? <MoviePopup movie={popup} setPopup={setPopup} />
                        : <DisplayCollection />
            }       
        </div>
    )
}


export default MyCollection
import * as React from 'react'
import StarRating from '../StarRating'
import Loading from './Loading'
import ThemeContext from '../../contexts/theme'

function Home() {
    const [userRatings, setUserRatings] = React.useState([])
    const [title, setTitle] = React.useState('')
    const [rating, setRating] = React.useState(0)
    const [movie, setMovie] = React.useState(null)

    const theme = React.useContext(ThemeContext)

    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            movie: null,
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
                movie: action.data,
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

    const handleFetch = (title) => {
        dispatch({ type: 'fetch' })

        fetch('api/v1/movies')
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'success', data}))
            .catch((e) => {
                console.warn(e.message)
                dispatch({ type: 'error' })
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let duplicateRating = false
        //TODO use different method from forEach to be able to return out of function
        userRatings.forEach((mapRating) => {
            if (mapRating.title === title) {
                mapRating.rating = rating
                duplicateRating = true
                return userRatings
            }
        })
        if (!duplicateRating) {
            userRatings.push({
                title: title,
                rating: rating
            })
        }
        setTitle('')
        setRating(0)1
        console.log(userRatings)
        return userRatings
    }

    const ratingClick = (val) => {
        setRating(val)
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                {title &&
                    <button
                        className={`btn ${theme === 'dark' ? 'light-btn' : 'darl-btn'}`}
                        type='button'
                        onClick={handleFetch}
                        disabled={!title}
                        
                    >
                        Find Movie
                    </button>}

                <StarRating rating={rating} onRating={ratingClick} />
                {(rating !== 0) &&
                    <span>  Rating: {rating}</span>
                }
                <input
                    className='btn dark-btn btn-space'
                    type='submit'
                    disabled={!movie}
                    value='Submit' />
            </form>
        </React.Fragment>
    )
}

export default Home
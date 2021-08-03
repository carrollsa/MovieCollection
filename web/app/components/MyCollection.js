import * as React from 'react'
import Loading from './Loading'

function MyCollection() {
    const [state, dispatch] = React.useReducer(
        fetchReducer,
        {
            movies: null,
            loading: true,
            error: null
        }
    )

    React.useEffect(() => {
        fetch()
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'success', data }))
            .catch((e) => {
                console.warn(e.message)
                dispatch({ type: 'error' })
            }
        )}, [])

    const fetchReducer = (state, action) => {
        if (action.type === 'fetch') {
            return {
                ...state,
                loading: true
            }
        } else if (action.type === 'success') {
            return {
                state: action.data,
                loading: false,
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

    return (
        <React.Fragment>
            {state.loading &&
                <Loading text='Loading your collection' />
            }
            <div>
                {state.movies.map((movie) => {
                    
                })}
            </div>
        </React.Fragment>
    )
}


export default MyCollection
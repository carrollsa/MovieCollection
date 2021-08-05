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
                dispatch({ type: 'error' })
            })
        }, [])

    function fetchReducer(state, action) {
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
                error: 'Fetch failed.',
                loading: false
            }
        }
    }

    return (
        <React.Fragment>
            {state.loading &&
                <Loading text='Loading your collection' />
            }

            {state.movies.length == 0
                ? <div>
                    {movies}
                </div>
                : <div>
                    Your collection is empty!
                </div>
            }


        </React.Fragment>
    )
}


export default MyCollection
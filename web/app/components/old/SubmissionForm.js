import * as React from 'react'

export default function SubmissionForm() {
    const [data, setData] = React.useState({
        movieId: '',
        rating: '',
    })

    const changeHandler = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submitForm (e) {

    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <div>
                    <input
                        type='text'
                        id='movieId'
                        value={data.movieId}
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        id='rating'
                        value={data.rating}
                        onChange={changeHandler}
                    />
                </div>
            </form>
        </div>
    )
}
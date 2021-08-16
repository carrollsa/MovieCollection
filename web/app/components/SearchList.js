import * as React from 'react'

export default function SearchList({ searchOptions }) {
    const [options, setOptions] = React.useState([])

    React.useEffect(() => {
        searchOptions.map((value, index) => {
            setOptions((priorOptions) => priorOptions.push(value))
        })
    }, [])

    return (
        <React.Fragment>
            <div
                className='option'
                key={index}
                // onClick={() =>
                //     setDisplayMovie(value)}
            >
                <span>{value}</span>
            </div>
        </React.Fragment>


    )
}
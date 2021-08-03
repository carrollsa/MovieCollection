import * as React from 'react'
import { FaHospitalSymbol } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

export default function Recommendations() {
    React.useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userRatings})
        }
        // console.log(typeof userRatings[0].id)
        // console.log(typeof userRatings[0].rating)
        fetch('recommendations', requestOptions)
            .then(response => JSON.stringify(response))
            .then(data => console.log(JSON.stringify(data)))
    },[])
    const location = useLocation()
    const { userRatings } = location.state


    return (
        <div>
            <p>
                Still working?
            </p>
        </div>
    )
}
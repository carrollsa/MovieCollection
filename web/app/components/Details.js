import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/fontawesome-svg-core'


export default function Details({ movieDetails }) {
    const { Rated, Genre, Director, Writer,
        Actors, Plot, Awards, Ratings, BoxOffice, Production } = movieDetails

    return (
        <React.Fragment>
            <ul className='no-bullets card-list'>
                <li>
                    <FontAwesomeIcon icon={faStar} color="#21ADA8" />
                    {Actors}
                </li>
                <li>
                    <FontAwesomeIcon icon={faUserEdit} color="dark-gray" />
                    {Writer}
                </li>

            </ul>
        </React.Fragment>
    )
}
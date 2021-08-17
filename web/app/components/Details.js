import * as React from 'react'
import { convertRunningTime } from '../utils/math'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUserEdit, faTheaterMasks, faAward, faPen, faClock, faFilm, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { VscMegaphone } from 'react-icons/vsc'

// function showRatings(ratings) {
//     return (
//         //Maybe reg paren for JSX?
//         ratings.map((rating) => {
//             if (rating.get("Source") === "Internet Movie Database") {
//                 return (
//                     <div>

//                     </div>
//                 )
//             }
//         })
//     )
// }

export default function Details({ movieDetails }) {
    const { Year, Runtime, Rated, Genre, Director, Writer,
        Actors, Plot, Awards, Ratings, BoxOffice } = movieDetails

    return (
        <React.Fragment>
            <ul className='no-bullets card-list'>
                {Director &&
                    <li>
                        <VscMegaphone color='rgb(114,34,199)' />
                        {Director}
                    </li>}
                {Year &&
                    <li>
                        <FontAwesomeIcon icon={faFilm} color='rgb(129, 195, 245)' />
                        {Year}
                    </li>
                }
                {Runtime &&
                    <li>
                        <FontAwesomeIcon icon={faClock} color='rgb(219,155,59)' />
                        {convertRunningTime(parseInt(Runtime))}
                    </li>
                }
                {Actors &&
                    <li>
                        <FontAwesomeIcon icon={faStar} color='#21ADA8' />
                        {Actors}
                    </li>
                }
                {Writer &&
                    <li>
                        <FontAwesomeIcon icon={faUserEdit} color='#606060' />
                        {Writer}
                    </li>
                }
                {Genre &&
                    <li>
                        <FontAwesomeIcon icon={faTheaterMasks} color='red' />
                        {Genre}
                    </li>
                }
                {Plot &&
                    <li>
                        <FontAwesomeIcon icon={faPen} color='black' />
                        {Plot}
                    </li>
                }
                {Awards &&
                    <li>
                        <FontAwesomeIcon icon={faAward} color='blue' />
                        {Awards}
                    </li>
                }
                {Ratings &&
                    // <li>
                    //     {/* <FontAwesomeIcon icon={ } color="" /> */}
                    //     {showRatings(Ratings)}
                    // </li>
                    "Ratings"
                }
                {BoxOffice &&
                    <li>
                        <FontAwesomeIcon icon={faDollarSign} color='#85bb65' />
                        {BoxOffice}
                    </li>
                }
            </ul>
        </React.Fragment>
    )
}
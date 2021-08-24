import * as React from 'react'
import { convertRunningTime } from '../utils/math'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUserEdit, faTheaterMasks, faAward, faClock, faFilm, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { VscMegaphone } from 'react-icons/vsc'
import Tooltip from './Tooltip'
import DisplayRatings from './DisplayRatings'
import PropTypes from 'prop-types'

export default function Details({ movie }) {
    const { Year, Runtime, Rated, Genre, Director, Writer,
        Actors, Awards, Ratings, BoxOffice } = movie

    return (
        <React.Fragment>
            <ul className='no-bullets card-list'>
                {Director &&
                    <Tooltip text="Director">
                        <li>
                            <VscMegaphone color='rgb(222,30,236)' />
                            {Director}
                        </li>
                    </Tooltip>
                }
                {Year &&
                    <Tooltip text="Released">
                        <li>
                            <FontAwesomeIcon icon={faFilm} color='rgb(129, 195, 245)' />
                            {Year}
                        </li>
                    </Tooltip>
                }
                {Runtime &&
                    <Tooltip text="Runtime" >
                        <li>
                            <FontAwesomeIcon icon={faClock} color='rgb(219,155,59)' />
                            {convertRunningTime(parseInt(Runtime))}
                        </li>
                    </Tooltip>
                }
                {Actors &&
                    <Tooltip text="Starring" >
                        <li>
                            <FontAwesomeIcon icon={faStar} color='#21ADA8' />
                            {Actors}
                        </li>
                    </Tooltip>
                }
                {Writer &&
                    <Tooltip text="Written by" >
                        <li>
                            <FontAwesomeIcon icon={faUserEdit} color='#606060' />
                            {Writer}
                        </li>
                    </Tooltip>
                }
                {Genre &&
                    <Tooltip text="Genre(s)" >
                        <li>
                            <FontAwesomeIcon icon={faTheaterMasks} color='red' />
                            {Genre}
                        </li>
                    </Tooltip>
                }
                {Awards &&
                    <Tooltip text="Awards" >
                        <li>
                            <FontAwesomeIcon icon={faAward} color='blue' />
                            {Awards}
                        </li>
                    </Tooltip>
                }
                {Ratings &&
                    <DisplayRatings ratings={Ratings} />
                }
                {BoxOffice &&
                    <Tooltip text="Box office" >
                        <li>
                            <FontAwesomeIcon icon={faDollarSign} color='#85bb65' />
                            {BoxOffice}
                        </li>
                    </Tooltip>
                }
            </ul>
        </React.Fragment>
    )
}

Details.propTypes = {
    movie: PropTypes.object.isRequired
}
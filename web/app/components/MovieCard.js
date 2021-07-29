import * as React from 'react'
import { FaClock, FaCalendar, FaFilm } from 'react-icons/fa'
import { VscMegaphone } from 'react-icons/vsc'
import { convertId } from '../utils/math'
import PropTypes from 'prop-types'
import StarRating from './StarRating'

export default function MovieCard({ id, title, year, posterURL, runningTime, userRatings }) {
    const [rating, setRating] = React.useState(0)
    const [disabled, setDisabled] = React.useState(false)

    //Is there a way to make sure duplicate objects were never added in the first place?
    const ratingClick = (val) => {
        setRating(val)
        setDisabled(true)
        // userRatings.push({ 
        //     id: id,
        //     rating: val
        // })
        submitRating(id, val)
        console.log(userRatings)
    }
    // how do I update if the rating is found and add a new rating if not?
    const submitRating = (id, val) => {
        let duplicateRating = false
        userRatings.forEach((mapRating) => {
            if (mapRating.id === id) {
                mapRating.rating = val
                duplicateRating = true
                return userRatings
            }
        })
        if (!duplicateRating) {
            userRatings.push({
                id: id,
                rating: val
            })
        }
        return userRatings
    }

    return (
        <React.Fragment>
            <div className={'card bg-light medium-text'}>
                <h4 className='header-sm center-text'>
                    <a className='link' href={`https://www.imdb.com/title/tt${convertId(id)}/`}>{title}</a>
                </h4>
                {posterURL && <img
                    className='movie-poster'
                    src={posterURL}
                    alt={`poster for ${title}`}
                />}
                <ul className='no-bullets card-list'>
                    <li>
                        <VscMegaphone color='rgb(114,34,199)' size={24} className='vsci-mega' />
                        <span> director</span>
                    </li>
                    <li>
                        <FaFilm color='rgb(129, 195, 245)' size={22} />
                        <span>{' '}{year}{'   '}</span>

                    </li>
                    <li>
                        <FaClock color='rgb(219,155,59)' size={22} />
                        <span>{Math.floor(runningTime / 60)}hr {runningTime % 60}min</span>
                    </li>
                    <li>
                        <StarRating rating={rating} onRating={ratingClick} />
                        {(rating !== 0) && 
                            <span>  {rating}</span>
                        }
                    </li>
                </ul>
            </div>
        </React.Fragment>

    )
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    posterURL: PropTypes.string,
    runningTime: PropTypes.number
}
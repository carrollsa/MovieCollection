import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'

function DisplayRatings({ ratings }) {
    return (
        ratings.map((rating => {
            switch (rating.Source) {
                case 'Internet Movie Database': {
                    return (
                        <Tooltip text='IMDB'>
                            <li key={rating.Source + rating.Value}>
                                <i className='fab fa-imdb' color='yellow' />
                                {rating.Value}
                            </li>
                        </Tooltip>
                    )
                }
                case 'Rotten Tomatoes': {
                    let index = rating.Value.indexOf('%')
                    let value = rating.Value.substring(0, index)
                    let icon = parseInt(value) < 60 ? '💩 ' : '🍅 '
                    return (
                        <Tooltip text='Rotten Tomatoes' >
                            <li key={rating.Source + rating.Value}>
                                {icon}
                                {rating.Value}
                            </li>
                        </Tooltip>
                    )
                }
            }
        }))
    )
}

export default DisplayRatings

import * as React from 'react'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa'

export default function StarRating({ count = 10, rating = 0, color, onRating }) {
    const [hoverValue, setHoverValue] = React.useState(0)

    const getColor = index => {
        if (hoverValue >= index) {
            return color.filled
        } else if (!hoverValue && rating >= index) {
            return color.filled;
        } else {
            return color.unfilled
        }
    }

    const starRating = React.useMemo(() => {
        return Array(count)
            .fill(0)
            .map((_, i) => i + 1)
            .map(index =>
                <FaStar
                    key={index}
                    stroke='black'
                    strokeWidth={20}
                    className='fa-star'
                    color={color.unfilled}
                    onClick={() => onRating(index)}
                    style={{ color: getColor(index) }}
                    onMouseOver={() => setHoverValue(index)}
                    onMouseOut={() => setHoverValue(0)}
                />
            )
    }, [count, rating, hoverValue])

    return (
        <React.Fragment>
                <div className='star-rating'>
                    {starRating}
                </div>
        </React.Fragment>
    )
}

StarRating.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onRating: PropTypes.func,
    color: PropTypes.object
    //filled vs unfilled within obj?
}

StarRating.defaultProps = {
    color: {
        filled: '#f5eb3b',
        unfilled: "#DCDCDC"
    }
}
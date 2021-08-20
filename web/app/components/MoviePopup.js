import React from 'react'
import Details from './Details'

function MoviePopup({ movie }) {
    const { Title, Poster, Year, Plot} = movie

    return (
        <section className='popup'>
            <div className='content'>
                <h2>{Title}<span>({Year})</span></h2>
                <div className='plot'>
                    <img src={Poster} alt={`poster for ${Title}`} />
                    <p>{Plot}</p>
                </div>
                <Details movie={movie} />
            </div>
        </section>
    )
}

export default MoviePopup

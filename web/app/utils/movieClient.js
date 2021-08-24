export function fetchMovieDetails(id) {
    //Acknowledged this is no good, but it's a free service for which I can get another API key
    const api = `http://www.omdbapi.com/?i=tt${id}&apikey=2b3a335d`
    return fetch(api)
        .then((res) => res.json())
        .catch((e) => {
            console.warn(e.message)
            throw e
        })
}

export function postRating(id, rating) {
    const api = ('api/v1/ratings')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            movieId: id,
            ratingValue: rating
        })
    }
    return (
        fetch(api, requestOptions)
            .catch((e) => {
                console.warn(e.message)
                throw e
            })
    )
    
}

export function fetchRatings() {
    const api = `api/v1/ratings`
    return fetch(api)
        .then((res) => res.json())
        .catch((e) => {
            console.warn(e.message)
            throw e
        })
}

export function fetchMovieFromDB(id) {
    const api = `api/v1/movies`
    return fetch(api)
        .then((res) => res.json())
        .catch((e) => {
            console.warn(e.message)
            throw e
        })
}

export function fetchMovieByTitle(title) {
    const api = 'api/v1/movies?'
    return (
        fetch(api + new URLSearchParams({
            title: title
        }))
            .then(response => response.json())
            .catch((e) => {
                console.warn(e.message)
                throw e
            })
    )
}
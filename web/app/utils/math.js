import * as React from 'react'

export function convertId (id) {
    let convertedId = id.toString()
    while (convertedId.length < 7) {
        convertedId = '0' + convertedId
    }
    return  convertedId
}

export function convertRunningTime (mins) {
    if (mins === 60) {
        return '1hr';
    } else if (mins < 60) {
        return mins + 'min'
    } else {
        return `${Math.floor(mins / 60)}hr ${mins % 60}min`
    }
}
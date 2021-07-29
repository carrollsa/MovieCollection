import * as React from 'react'

export function convertId (id) {
    let convertedId = id.toString()
    while (convertedId.length < 7) {
        convertedId = '0' + convertedId
    }
    return  convertedId
}
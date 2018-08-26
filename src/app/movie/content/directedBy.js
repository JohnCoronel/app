import React from 'react'
import ScrollList from '../../common/scrollList'
import { P } from 'glamorous';


filterDirectorRole = (films) => {
    return films.filter(film => {
        film.job === "Director"
    })
}

const GetRoles = (directorID) => {
    return fetch(`https://api.themoviedb.org/3/person/${directorID}/movie_credits?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US`)
    .then(resp => {
        return filterDirectedBy(resp)
    })
    .catch(error => console.log(error)) 
}



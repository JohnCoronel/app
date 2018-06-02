import React from 'react';
import '../movieList/movieList.css';

import MovieCard from '../movieCard'


//props - count
 const MovieList = (props) => {
    return (
        <div className = "Listing">
        <h3> Related Films </h3>
        <div className = "movie-list">
            <div><MovieCard/></div>
            <div><MovieCard/></div>
        </div>
        </div>
    )
}

export default MovieList;
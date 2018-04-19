import React from 'react';
import "./style/app.css";

import MovieCard from './MovieCard';


const Movie = ({match}) => (
    <div className = "content">

        <div>
        <MovieCard/>
           </div>
        </div>
    

)

export default Movie;
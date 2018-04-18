import React from 'react';
import "./style/app.css";
import MovieCard from './card';
import MovieCardFix from './MovieCard';


const Movie = ({match}) => (
    <div className = "content">

        <div>
        <MovieCard />
        <MovieCardFix/>
        
           </div>
        </div>
    

)

export default Movie;
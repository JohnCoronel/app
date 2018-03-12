import React from 'react';
import "./style/app.css";
import MovieCard from './card';


const Movie = ({match}) => (
    <div className = "content">
        This is the page for the {match.params.id}
        <MovieCard/>
        </div>
)

export default Movie;
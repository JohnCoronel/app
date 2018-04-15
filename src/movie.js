import React from 'react';
import "./style/app.css";
import MovieCard from './card';


const Movie = ({match}) => (
    <div className = "content">
        This is the page for the {match.params.id}
        <div style = {{display:'flex'}}>
        <MovieCard />
        <MovieCard/>
           d</div>
        </div>
    

)

export default Movie;
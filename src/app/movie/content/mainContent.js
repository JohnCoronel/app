import React from 'react';
import '../content/content.css';



const imgUrl = "https://image.tmdb.org/t/p/w500/"

const parseGenres = (genres) => {
    if (!genres) {
        return ''
    }
    return genres.map((item) => {
        return item.name
    }).slice(0,1).join(' · ')
}

const moviePage = (props) => {
    return (
        <div className = "movie-content">
            <div className = "movie-content__info">
            <div className = "content-header">
            <div className = "score">{props.movie.vote_average}</div>
            <div className = "main-info">
                <h3>{props.movie.title}</h3>
                <div className = "sub-header">
                    <div> {parseGenres(props.movie.genres)}</div>
                    <div> {props.movie.release_date} </div>
                    <div> {props.movie.runtime}m</div> 
                </div>
        
                </div>

                
            
                <img src = {imgUrl + props.movie.poster_path}/>
                <div className = "content-info">
                    Director 
                    ScreenWriter
                    Staring 
                </div>
                </div>

                <div className = "content-body">
                    <p> {props.movie.overview} </p>
                </div>
            </div>
        </div>
    )
}

export default moviePage;
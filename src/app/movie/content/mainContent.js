import React from 'react';
import '../content/content.css';



const imgUrl = "https://image.tmdb.org/t/p/w500/"

const parseGenres = (genres) => {
    if (!genres) {
        return ''
    }
    return genres.map((item) => {
        return item.name
    }).slice(0,2).join(' · ')
}

const moviePage = (props) => {
    return (
        <div className = "movie-content">
            <div className = "movie-content__info">
            <div className = "content-header">
            <div className = "main-info">
                <h2>{props.movie.title}</h2>
                <div className = "sub-header">
                    <div> {parseGenres(props.movie.genres)}</div>
                    <div> {props.movie.release_date} </div>
                    <div> {props.movie.runtime}m</div> 
                </div>
                </div>
            

                <div className = "score">{props.movie.vote_average}</div>
                </div>

                <div className = "content-body">
                    <img src = {imgUrl + props.movie.poster_path}/>
                    <p> {props.movie.overview} </p>
                </div>
            </div>
        </div>
    )
}

export default moviePage;
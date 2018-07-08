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

//TODO - Content Actions - Rate, Add to List, Tag, Recommend, Like,ect..
//TODO - ADD AVAILABLE_ON placeholders for streaming serives and Rent
const moviePage = (props) => {
    return (
        <div className = "movie-content">
            <div className = "score">{props.movie.vote_average}</div>
            <div className = "content-header">
                <h3>{props.movie.title}</h3>
                <div className = "sub-header">
                    <div> {parseGenres(props.movie.genres)}</div>
                    <div> {props.movie.release_date} </div>
                    <div> {props.movie.runtime}m</div> 
                </div>
            </div>
            <div className = "content-body">
                <img src = {imgUrl + props.movie.poster_path}/>
                <div className = "content-info">
                    <div className = "sub-info">Director <span className = "spacer-d"></span>  Damien Chazelle </div>
                    <div className = "sub-info">Writers <span className = "spacer-w"></span>     Damien Chazelle </div>
                    <div className  = "sub-info">Staring <span className = "spacer-s"></span>   Miles Teller, JK Simmons </div> 
                </div> 
            </div>
            {/* <div className = "content-action">
            
            </div> */
            }
        </div>
    )
}

export default moviePage;
import React from 'react';
import Rating from './rating';
import StreamIcons from './streamIcons'
import ActionRow from './ActionRow'
import '../content/content.css';



const imgUrl = "https://image.tmdb.org/t/p/w500/"


const renderDate = date => {
    if (!date){
        return ''
    }
    return date.slice(0,4)
}



//TODO - Content Actions - Rate, Add to List, Tag, Recommend, Like,ect.. (Bottom)
//TODO - ADD AVAILABLE_ON placeholders for streaming serives and Rent - third row in content header
//TODO - ADD Synopsis - overflows on mobile
const moviePage = (props) => {
    return (
        <div className = "movie-content">
            <div className = "content-header">
            <div className = "primary-info">
                <h2>{props.movie.title}</h2>
                 <div className = "release-year"> {renderDate(props.movie.release_date)} </div>      
                </div>
            </div>
            <div className = "content-body">
                <img src = {imgUrl + props.movie.poster_path}/>
                <div className = "content-info">
                <Rating  score = {props.movie.vote_average}/>
                   <ActionRow/>
                    {/* <div className = "sub-info"><h4>Director</h4> <span className = "spacer-d"></span> <span className ="info-detail">Damien Chazelle </span> </div>
                    <div className = "sub-info"><h4>Writers</h4> <span className = "spacer-w"></span> <span className = "info-detail">  Damien Chazelle</span> </div>
                    <div className  = "sub-info"><h4>Staring</h4><span className = "spacer-s"></span> <span className = "info-detail">Miles Teller, JK Simmons </span></div> */}
                    <div className = "actions">
                    <StreamIcons/>
                        <div className = "synopsis"> 
                            <h4> Overview </h4>
                            {props.movie.overview} 
                        </div>
                    </div>
                </div> 
            </div>
            {/* <div className = "content-action">
            
            </div> */
            }
        </div>
    )
}

export default moviePage;
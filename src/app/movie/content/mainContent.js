import React from 'react';
import {Loader,Segment} from 'semantic-ui-react'
import placeholder from './placeholder.svg'
import Score from './rating'
import Rating from './review'
import Slider from './slider'
import StreamIcons from './streamIcons'
import ProgressiveImage from 'react-progressive-image'
import ActionRow from './ActionRow'
import '../content/content.css';
const imgUrl = "https://image.tmdb.org/t/p/w500/"



const renderDate = date => {
    if (!date){
        return ''
    }
    return date.slice(0,4)
}


const moviePage = (props) => {

   
    return (
        <Segment basic>
            <Loader active = {props.loading} />
        <div className = "movie-content">
            <div className = "content-header">
                <h2>{props.movie.title} <span className = "release-year"> ({renderDate(props.movie.release_date)}) </span></h2>
            </div>
            <div className = "content-body">
                <ProgressiveImage src ={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} placeholder = {placeholder}>
                    { src => <img src = {src} alt = 'poster' />}
               </ProgressiveImage>


            <div className = "primary-info">
            <div className = "content-field">
               <div className = "content-key">Director</div>  {props.directors.map(director => {
                    return <span className = "content-value">{director.name}</span>
                })}
            </div>

            <div className = "content-field">
            <div className = "content-key">Screenplay</div> {props.screenwriters.map(writer => {
                    return <span className = "content-value"> {writer.name}</span>
                })}
            </div>

            <div className = "content-field">
            <div className = "content-key">Staring</div> {props.staring.map(actor => {
                    return <span className = "content-value"> {actor.name}</span>
                })}
            </div>
                
                <div className = "content-field overview">
                <div className = "content-key ">Overview</div> {props.movie.overview}
                </div>
            </div>
                <div className = "content-info">
                    {/* <Score score = {props.movie.vote_average} genres ={props.movie.genres}/> */}
                    <Slider/>
                    <StreamIcons/>
                    
                    {/* <Rating auth = {props.auth} rating = {0} score = {()=> console.log('scored')} /> */}
                   <ActionRow/>
                </div> 
            </div>
        </div>
    </Segment>
    )}


export default moviePage;
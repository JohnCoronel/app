import React from 'react';
import {Loader} from 'semantic-ui-react'
import placeholder from './placeholder.svg'
import Score from './rating'
import Rating from './review'
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
    if (props.contentLoading) {
        <Loader active = {props.contentLoading}/> 
    }
    else {
    return (
        <div className = "movie-content">
            <div className = "content-header">
            <div className = "primary-info">
                <h2>{props.movie.title} <span className = "release-year"> ({renderDate(props.movie.release_date)}) </span></h2>
                </div>
            </div>
            <div className = "content-body">
                <ProgressiveImage src ={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} placeholder = {placeholder}>
                { src => <img src = {src} alt = 'poster' />}
               </ProgressiveImage>
                <div className = "content-info">
                <Score score = {props.movie.vote_average} genres ={props.movie.genres}/>
                <Rating auth = {props.auth} rating = {0} score = {()=> console.log('scored')} />
                   <ActionRow/>
                   
                   
                </div> 
            </div>
        </div>
    )}
}

export default moviePage;
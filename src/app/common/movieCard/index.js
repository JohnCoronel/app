import React from 'react';
import ClassNames from 'classnames';

import AddIcon from  "./Icons/AddIcon";
import placeholder from './posterPlaceholder.svg'
import GenreIcon from './Icons/GenreIcon'
import LikeIcon from "./Icons/LikeIcon";
import ProgressiveImage from 'react-progressive-image'
import ShareIcon from "./Icons/ShareIcon";
import ReviewIcon from "./Icons/ReviewIcon";
import ChevronIcon from "./Icons/ChevronIcon";
import TimeIcon from "./Icons/TimeIcon";
import CalendarIcon from "./Icons/CalendarIcon"
import {Link} from 'react-router-dom';

import './moviecard.css';

export default class MovieCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expanded:false
        }
    }
showContent = () => {
    this.setState({expanded:!this.state.expanded})
}

    render(){
        
        const image = ClassNames({
            "movie-card__image": true,
            "movie-card__image--hidden": this.state.expanded
        })

        const body = ClassNames({
            "movie-card__content--active": this.state.expanded,
            "movie-card__content": true
            
        })

        const movieBtn = ClassNames({
            "movie-card__content__btn":true,
            "movie-card__content__btn--active":this.state.expanded
        })
        const content = ClassNames({
            'movie-card__content__body':true,
            'movie-card__content__body--active':this.state.expanded
        })


        return(
            <div className = "movie-card">
                <div className = {image}>
               <Link to = {`/movie/${this.props.movie.id}`}>
               <ProgressiveImage src ={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} placeholder = {placeholder}>
                { src => <img src = {src} alt = 'poster' />}
               </ProgressiveImage>
               </Link>
                </div>
                    <div className = {body}>
                        <h3>{this.props.movie.title}</h3>
                        <h5>  <span><GenreIcon/> Action </span> <span><TimeIcon/> 118m </span>  <span><CalendarIcon/>  2013 </span> </h5>
                        <div className ={content}>
                        
                            <p>
                            {
                                this.props.movie.overview
                            } 
                            </p>

                        </div>
                        <div className = "movie-card__footer">
                            <LikeIcon/>
                            <ShareIcon/>
                            <ReviewIcon/>
                            <AddIcon/>
                        </div>
                       
                    </div>
                    <div onClick = {this.showContent} className={movieBtn}><ChevronIcon/></div>
            </div>
        )
    }
}
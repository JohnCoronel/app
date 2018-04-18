import React from 'react';
import ClassNames from 'classnames';

import AddIcon from  "./components/AddIcon";
import LikeIcon from "./components/LikeIcon";
import ShareIcon from "./components/ShareIcon";
import ReviewIcon from "./components/ReviewIcon";
import ChevronIcon from "./components/ChevronIcon";
import './moviecard.css';

export default class MovieCard extends React.Component {
    constructor(){
        super()
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

        return(
            <div className = "movie-card">
                <div className = {image}>
                <img  src = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt = "movie poster"></img>
                </div>
                    <div className = {body}>
                        <h3> Mad Max Fury Road </h3>
                        <h5> Action ‧ 2hr 15m ‧ 2015 </h5>
                        <div className ="movie-card__content__body">
                            <p>
                            An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, 
                            and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able
                             
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
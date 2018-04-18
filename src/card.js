import React from 'react';
import ClassNames from 'classnames';

import "./style/card.css";
import AddIcon from  "./components/AddIcon";
import LikeIcon from "./components/LikeIcon";
import ShareIcon from "./components/ShareIcon";
import ReviewIcon from "./components/ReviewIcon";
import ChevronIcon from "./components/ChevronIcon";

class MovieCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false
        };
    }

    
    showContent = () => {
        this.setState({expanded:!this.state.expanded})
    }

    render() {
        let chevronClass = ClassNames({
            'expand-btn':true,
            'open':this.state.expanded,
        })

        let content = ClassNames({
            'wrapper':true,
            'content-shown':this.state.expanded
        })

        let bodyClass = ClassNames({
            'content--body':true,
            'content--body-hidden':!this.state.expanded,
            'content-body-active':this.state.expanded
        })
        return (
            <div className = "movie_card">  
                <img src = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt = "movie poster"></img>
                <div className = "card--content">
                <div className ={content}>
                    <div className = "content--header">
                    <div className = "content--header-top">
                    <h3> Mad Max Fury Road  </h3>
                    
                    </div>
                
                    <h5> Action ‧ 2hr 15m ‧ 2015  </h5>
                    </div>
                    <div className ={bodyClass}>
                     "Lorem ipsum dolsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu."
                    
                    </div>
                    
                    </div>
                    <div  onClick = {this.showContent} className={chevronClass}><ChevronIcon/></div>
                    <div className = "content--footer">
                    
                    <LikeIcon/>
                    <ShareIcon/>
                    <ReviewIcon/>
                    <AddIcon/>
                    </div>
                </div>

            </div>
        )
    }
}


export default MovieCard;

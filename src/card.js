import React from 'react';
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
            clicked: false
        };
    }
    render() {
        return (
            <div className = "movie_card">  
                <img src = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt = "movie poster"></img>
                <section className = "card--content">
                    <div className = "content--header">
                    <div className = "content--header-top">
                    <h3> Mad Max Fury Road 

                          </h3>
                    <div className="show-card-body-btn"><ChevronIcon/></div>
                    </div>
                
                    <h5> Action | Sci-Fi ‧ 2hr 15m ‧ 2015  </h5>
                    </div>
                    <div className = "content--body">
                    <p> "Lorem ipsum dolsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu."
                    </p>
                    </div>
                    <div className = "content--footer">
                    <AddIcon/>
                    <LikeIcon/>
                    <ShareIcon/>
                    <ReviewIcon/>
                    </div>
                </section>

            </div>
        )
    }
}


export default MovieCard;

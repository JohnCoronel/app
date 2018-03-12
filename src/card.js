import React from 'react';
import "./style/card.css";

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
                <section className = "card_info">
                    <h3> Mad Max Fury Road  </h3>
                    <h4> Subtitle </h4>
                    <p> "Lorem ipsum dolsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu."</p>
                </section>
            </div>
        )
    }
}


export default MovieCard;

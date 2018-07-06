import React from 'react';
import MovieList from '../common/movieList/movieList';



 class HomePage extends React.Component{
    constructor(){
        super();
        this.state = {
            popular:[],
            current:[]
        }
    }

    componentDidMount(){
        this.fetchPopular();
        this.fetchCurrent();
    }
    fetchPopular = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .then(response => {
        response.json().then(results => {
            this.setState({
                popular:results.results
            })
        })
    })
  
    }

    fetchCurrent = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US&page=1')
        .then(response => {
            response.json().then(response => {
                this.setState({
                    current:response.results
                })
            })
        })
          
     
        }

 render(){
     
    return (
    <div className = "homepage">
    HomePage
 
    </div>
    )
 }

}

export default HomePage;
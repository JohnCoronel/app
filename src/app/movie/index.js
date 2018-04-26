import React from 'react';
import MovieCard from '../common/movieCard/index';
import './movie.css';



const imgUrl = "https://image.tmdb.org/t/p/w500/"

class MoviePage extends React.Component {
    constructor(){
        super();
        this.state = {
            movie:{},
            error:'',
            loading: false
        }
    }

    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.fetchMovie(movieId)
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname){
            const movieId = nextProps.match.params.id;
            this.fetchMovie(movieId)
        }
    }

    fetchMovie(id){
        this.setState({
            loading:true
        });
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US`)
        .then((response) => {
            console.log()
            response.json().then(data => {
                this.setState({
                    movie:data,
                    error:'',
                    loading:false
                })
            
            })
        })
    }

  render() {
      return (
          <div className = "movie-page">
          <div className = "movie-content">
              <img src = {imgUrl + this.state.movie.poster_path}/>
              <div className = "movie-content__info">
                 <h1>{this.state.movie.title}</h1>
                 <h3> {this.state.movie.release_date}</h3>
              </div>

          </div>
            <MovieCard/>
          </div>
      )
  }


}


export default MoviePage;
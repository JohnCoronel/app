import React from 'react';
import MovieList from '../common/movieList/movieList';
import CreditsTable from '../movie/creditsTabs/';
import 'semantic-ui-css/semantic.min.css';
import MovieContent from './content/mainContent';
import './movie.css';
import ScrollList from '../movie/scrollList';






class MoviePage extends React.Component {
    constructor(){
        super();
        this.state = {
            movie:{},
            error:'',
            loading: false,
            recommended:[],
            cast:[]
        }
    }

    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.fetchMovie(movieId)
        this.fetchCredits(movieId)
        this.fetchRecommendations(movieId)
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname){
            const movieId = nextProps.match.params.id;
            this.fetchMovie(movieId)
            this.fetchCredits(movieId)
            this.fetchRecommendations(movieId)
        }
    }

    fetchMovie(id){
        this.setState({
            loading:true
        });
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US`)
        .then((response) => {
            response.json().then(data => {
                this.setState({
                    movie:data,
                    error:'',
                    loading:false
                })
            })
        })
    }

    fetchRecommendations(id){
        this.setState({
            loading:true
        });
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US&page=1`)
        .then(response => {
            response.json().then(data => {
                this.setState({recommended:data.results})
            })
        })
    }

    fetchCredits(id){
        this.setState({
            loading:true
        });
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f0d9f12b62cff10da32d3bcd8da1424f`)
        .then(response => {
            response.json().then(data => {
                this.setState({cast:data})
            })
        })
    }

  render() {
      return (
          <div className = "movie-page">
           <MovieContent movie = {this.state.movie}/>
            <MovieList title = 'Similar Movies' list = {this.state.recommended}/>
            <ScrollList list = {this.state.recommended}/>
            <CreditsTable credits = {this.state.cast}/>
          </div>
      )
  }
}
export default MoviePage;
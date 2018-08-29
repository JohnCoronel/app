import React from 'react';
import CreditsTable from '../movie/creditsTabs/';
import Header from '../common/header'
import 'semantic-ui-css/semantic.min.css';
import MovieContent from './content/mainContent';
import './movie.css';
// import ScrollList from '../common/stackList'
import StackedList from '../common/stackList';






class MoviePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie:{},
            contentLoading:false,
            creditsLoading:false,
            recLoading:false,
            staring:[],
            directors:[],
            screenwriters:[],
            recommended:[], 
            credits:[]
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
            window.scrollTo(0,0)
            this.fetchMovie(movieId)
            this.fetchCredits(movieId)
            this.fetchRecommendations(movieId)
        }
    }

    fetchMovie(id){
        this.setState({
            contentLoading:true,
         
        });
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US`)
        .then((response) => {
            response.json().then(data => {
                this.setState({
                    movie:data,
                    contentLoading:false,
                
                })
            })
        })
    }

    fetchRecommendations(id){
        this.setState({
            recLoading:true,

        });
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US&page=1`)
        .then(response => {
            response.json().then(data => {
                this.setState({
                    recommended:data.results.slice(0,10),
                    recLoading:false,
                })
            })
        })
    }



    fetchCredits(id){
        this.setState({
            creditsLoading:true
        });
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f0d9f12b62cff10da32d3bcd8da1424f`)
        .then(response => {
            response.json().then(data => {
                let staring = data.cast.slice(0,4)
                let directors = data.crew.filter( credit =>
                    credit.job === 'Director'
                )
                 let writers = data.crew.filter( credit =>
                    credit.job === 'Screenplay' || credit.job === 'Writer'
                ).slice(0,4)

                this.setState({
                    credits:data,
                    creditsLoading:false,
                    staring:staring,
                    directors:directors,
                    screenwriters:writers

                })
            })
            
        })
    }

  render() {
      return (
          <div className = "movie-page">
          <Header/>
          <div className = "movie-body">
           <MovieContent  loading = {this.state.contentLoading} movie = {this.state.movie} staring ={this.state.staring} directors = {this.state.directors}  screenwriters = {this.state.screenwriters}/>
           
            <StackedList  loading = {this.state.recLoading} title = "Similar Films" list = {this.state.recommended}/>
            <CreditsTable loading = {this.state.creditsLoading} credits = {this.state.credits}/>
          </div>
          </div>
      )
  }
}
export default MoviePage;
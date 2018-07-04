import React from 'react';
import {withRouter} from 'react-router-dom';
import "./search.css"
import Image from '../../../common/ImageWithFallback';
import fbimg from './fallback.png';

const query = "https://api.themoviedb.org/3/search/movie?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US&page=1&include_adult=false&query="
const posterthumb = "https://image.tmdb.org/t/p/w92"
class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { 
            searchResults: [],
            isFetching: false,
            searchQuery: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }
    handleChange(e) {
        const inputValue = e.target.value;
        this.setState({searchQuery:e.target.value});

        if (!inputValue) {
            return '';
        }
            this.setState({isFetching:true})
            fetch(query + inputValue)
            .then((response) => {
                response.json().then(
                    (data) => {
                        console.log(data.results)
                        this.setState({
                            searchResults:data.results,
                            isFetching:false
                        })
                    }
                )
            })
    }

    handleRedirect(id){
        this.setState({
            searchQuery:'',
            searchResults:[]
        })
        this.props.history.push(`/movie/${id}`);
    }

    renderResults() {
        const {searchQuery,searchResults} = this.state;
        
        if (!searchQuery || !searchResults){
            return '';
        }
            if (searchResults.length > 0 ) {
                return (
                    <div className = "Search-result-container">
                    {searchResults.map(result => (
                         <div
                            onClick = {() => this.handleRedirect(result.id)}
                            key = {result.id}
                            className = "Search-result"
                        >
                        <Image alt = 'poster-thumb' fallbackSrc = {fbimg} src = {posterthumb + result.poster_path} />
                        {result.title} 
                          </div> 
                        ))}
                    </div>
                )
            }
        }
    


    render() {
        return (
        <div className = "Search">
            <input className = "Search-input" type = "search" placeholder= "Search..." value = {this.state.searchQuery} onChange = {this.handleChange}/> 
            {this.renderResults()}
        </div>
        )
    }
}


export default withRouter(SearchBar);
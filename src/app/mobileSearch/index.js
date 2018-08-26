import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const SearchContainer = styled.div`
display:flex;
flex-direction:column;
    @media(min-width:600px){
        display:none;
    }
    flex:1;
    width:100%;
`

const Header = styled.h2`
    margin: .5rem auto;
    font-family: Righteous;
`

const SearchInput = styled.input`
    padding: 5px 10px;
    border:10px;
    height:35px;
    width:90%;
    margin: 0 auto;
    border:1px solid #777;
    border-radius:1rem;
    max-width:350px;

    &:focus {
        outline:none;
    }

`

const SearchHeader = styled.div`
    z-index:2;
    flex-direction:column;
    display:flex;
    background-color: #fafafa;
    padding:5px 0;
    width: 100%;
    margin: 0;
    position:fixed;
`

const Results = styled.div`
    margin:100px auto;
    width:75%;
    display:flex;
    flex-direction:column;
`

const Result = styled.div`
    display:flex;
    margin-top:.25rem;
    align-items:center;

    & img {
        margin-right:5px;
    }
    
`
const query = "https://api.themoviedb.org/3/search/movie?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US&page=1&include_adult=false&query="
const posterthumb = "https://image.tmdb.org/t/p/w92"

class MobileSearch extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        loading: false,
        searchQuery : '',
        searchResults :[]
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
        if (e.target.value === ''){
            return '';
        }
        fetch(query+this.state.searchQuery)
        .then(response => {
                response.json().then(
                    (data) => {
                        this.setState({
                            searchResults:data.results,
                            loading:false
                        })
                    }
                )
            })
    }

    handleRedirect = (id) => {
        this.setState({
            searchQuery:'',
            searchResults: []
        })
        this.props.history.push('/movie/'+id)
    }


    renderResults = () => {
        const {searchQuery, searchResults} = this.state;
        if (!searchQuery || !searchResults){
            return null;
        }
       
            if (searchResults.length > 0 ) {
                return (
                    <Results>
                   { searchResults.map((item,i) => {
                       return <Result onClick = {() => this.handleRedirect(item.id)}key = {i}> <img alt = "poster" src = {posterthumb+item.poster_path}/> {item.title}</Result>
                   })


                   }

                </Results>
                )
            }

    }

    render(){
        return (
            <SearchContainer>
                <SearchHeader>
                     <Header> Quetzalcoatl </Header>
                     <SearchInput type = "text" name = "searchQuery" placeholder = "Search.." value = {this.state.searchQuery} onChange = {this.handleChange}/>
                </SearchHeader>
                {this.renderResults()}
            </SearchContainer>

        )
    }
}

export default withRouter(MobileSearch);
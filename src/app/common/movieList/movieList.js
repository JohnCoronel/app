import React from 'react';
import '../movieList/movieList.css';
import MovieCard from '../movieCard'
import {Label} from 'semantic-ui-react';


//props - count
 class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expanded:false
        }
    }

     MapToCard = (list) => {
        
        const styles = [
            {zIndex:'6',transform:'translateX(0)'},
            {zIndex:'5',transform:'translateX(-105px)'},
            {zIndex:'4',transform:'translateX(-210px)'},
            {zIndex:'3',transform:'translateX(-315px)'}
    ]

    const expand = [
        {transform:'translateX(0)'},
        {transform: 'translateX(110px)'},
        {transform:'translateX(225px)'},
        {transform:'translateX(350px'}
    ]

        const topOfList = list.slice(0,4);
        return topOfList.map((item,i)=> {
            
            return (
                <div style = {styles[i]}>
                <MovieCard movie = {item} />
                </div>
            )
        })
     }

    render(){
        const ribbonStyles = {
            zIndex: '7',
            backgroundImage: 'linear-gradient(to right, #654ea3, #e1a3bd)',
            top:'.75rem',
            fontWeight: '400',
            fontSize: '16px',
            left: '-1.3rem'
        }
    return (
        <div className = "Listing">
        <Label style = {ribbonStyles} ribbon color='purple' size ='medium'>{this.props.title}</Label>
        <div className = "movie-list">
        {
            this.MapToCard(this.props.list)
        }
    
        </div>
        </div>
    )
     }
    }


export default MovieList;
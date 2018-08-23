import React from 'react';
import styled from 'styled-components';
import {Label} from 'semantic-ui-react';
import tagimg from './genre.svg'
import GenreIcon from './GenreIcon'

//TODO - Link genres to genre page

const Score = styled.div`
    box-sizing:content-box;
    font-size:1.7rem;
    margin:0;    
    text-align:center;
    width : 75px;
    line-height:75px;
    font-family: sans-serif;
    border-radius:50%;
    border:3px solid black;
`
const Genres = styled.div`
    padding-bottom:5px;
    Display:flex;
    justify-content:center;
    flex-wrap:wrap;
   
`
const Genre = styled.h4`
    margin:0;
    display:flex;
    padding:.1rem;
    font-weight:500;   
`
const RatingContainer = styled.div`
    font-family: Helvetica;
    justify-content:center;
    align-items:center;
    max-width:250px;
    display:flex;
    flex-direction:column;
    padding-bottom:1rem;
`

const mapGenres = (genres) => {
    let limit = genres.slice(0,3)
    return limit.map((genre,i) => {
        return <Genre><Label > {genre.name} </Label></Genre>
    })
}
const Rating = (props) =>{
    return (
     <RatingContainer>
            <Genres>
              {  props.genres ? mapGenres(props.genres) : ''  }
            </Genres>
            <Score> {props.score}  </Score>
        </RatingContainer>
    )
}
export default Rating;
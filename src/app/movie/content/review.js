import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components'

const RatingContainer = styled.div`
    padding-top:.2rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:200px;
`

const UserScore = styled.h3`
    align-self:flex-end;
    font-family:sans-serif;
    font-weight:400;
    margin:0;
    padding-right:2rem;

`

const UserRating = (props) => {
    return (
        <RatingContainer>
            <UserScore> {props.rating ? props.rating : '--'} / 10 </UserScore>
            <StarRatingComponent 
                name = 'rate'
                value = {props.rating}
                emptyStarColor = "#DCDCDC"
                editing = {props.auth}
                starCount = {10}
                onStarClick = {props.score}
                />
        </RatingContainer>
    )
}



export default UserRating;
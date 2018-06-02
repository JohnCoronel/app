import React from 'react';


const searchResults = (props) => {
    return (
        <div className = "Search-result-container">
            { props.searchResults.map((result)=> {
                return <searchResultElement/>
            })
            }
        </div>
    )
}

const searchResultElement = (props) => {
    return (
        <div className = "Search-result">
            <img alt = "poster" width = "75px" height= "106px" src = {props.imgSrc}/>
            <div className = "Search-result-details">
            <h4> {props.title} </h4>
            
            </div>
            </div>
    )
}
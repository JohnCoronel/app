import React from 'react'; 
import MovieCard from '../../common/movieCard';
import {Loader,Segment} from 'semantic-ui-react'
import "./scrollList.css"



const renderList = ({list}) => {

            return list.map(item => {
                return (
                    <div key = {item.title} className = "scroll-item">
                        <MovieCard movie = {item} />
                    </div>
                )
            })      
    }
const ScrollList = (props) => {
        return( 
            <Segment basic>
            <Loader active = {props.loading}/>
            <div className ="scroll-list-container">
                 <h3> {props.title} </h3>
                <div className = "scroll-list"> 
                    {renderList(props)}
                </div>
             </div>
             </Segment>
            )
    
}

export default ScrollList;
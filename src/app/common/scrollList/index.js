import React from 'react'; 
import MovieCard from '../../common/movieCard';
import {Loader} from 'semantic-ui-react'
import "./scrollList.css"



const renderList = ({list,loading}) => {
    console.log(loading)
    if (loading)  { return (<Loader active = {loading}/>)} 
    else {
            return list.map(item => {
                return (
                    <div key = {item.title} className = "scroll-item">
                        <MovieCard movie = {item} />
                    </div>
                )
            })
        }   
        }
const ScrollList = (props) => {
  
        return( 
            <div>
                 <h3 style = {{padding: '1rem 4rem'}}> {props.title} </h3>
                <div className = "scroll-list"> 
                    {renderList(props)}
                </div>
             </div>
            )
    
}

export default ScrollList;
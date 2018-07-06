import React from 'react'; 
import MovieCard from '../../common/movieCard';
import "./scrollList.css"

class ScrollList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        } 
    }
    render() {
        return( 
            <div>
                 <h3 style = {{marginLeft:'2rem'}}> Similar Movies </h3>
            <div className = "scroll-list"> 
       
            {
            this.props.list.map(item => {
               return (<div key = {item.title} className = "scroll-item"> <MovieCard movie = {item}/>
                </div>)
            })}
            </div>
            </div>)
    }
}

export default ScrollList;
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
        return( <div className = "scroll-list"> 
            {
            this.props.list.map(item => {
               return (<div className = "scroll-item"> <MovieCard movie = {item}/>
                </div>)
            })}
            </div>)
    }
}

export default ScrollList;
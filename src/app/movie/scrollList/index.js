import React from 'react'; 
import MovieCard from '../../common/movieCard';
import "./scrollList.css"

class ScrollList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        } 
    }

    renderList = (list) => {
        if (list != null || list != undefined){
            return list.map(item => {
                return (
                    <div key = {item.title} className = "scroll-item">
                        <MovieCard movie = {item} />
                    </div>
                )
            })
        }
    }

    render() {
        console.log(this.props.list)
        return( 
            <div>
                 <h3 style = {{marginLeft:'2rem'}}> Similar Movies </h3>
            <div className = "scroll-list"> 
            {this.renderList(this.props.list)}
            </div>
            </div>)
    }
}

export default ScrollList;
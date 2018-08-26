import React from 'react';
import Header from '../common/header'
import ScrollList from '../common/scrollList'
import StackList from '../common/stackList'
import './home.css';
import StackedList from '../common/stackList';



 class HomePage extends React.Component{
    constructor(){
        super();
        this.state = {
            popular:{
                loading:false,
                list:[]
            },
            current:{
                loading:false,
                list:[]
            }
        }
    }

    componentDidMount(){
        this.fetchPopular();
        this.fetchCurrent();
    }


    fetchPopular = () => {
        this.setState({
            popular:{
                ...this.state.popular,
                loading:true
            }
        })
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        .then(response => {
            response.json().then(results => {
                this.setState({
                    ...this.state,
                    popular: {
                        loading:false,
                        list:results.results.slice(0,10)
                    }
                   
                })
            })
        }) 
    }

    fetchCurrent = () => {
        this.setState({
            current: {
                ...this.state.current,
                loading:true
                
            }
        })
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f0d9f12b62cff10da32d3bcd8da1424f&language=en-US&page=1')
        .then(response => {
            response.json().then(response => {
                this.setState({
                    ...this.state,
                    current:{
                        loading:false,
                        list:response.results.slice(0,8)
                    }
                })
            })
        })
        }

    render(){
        return (
            <div className = "homepage">
                <Header/>
                <StackedList title = 'Popular' list = {this.state.popular.list}/>
                <StackedList title = 'Current Releases' loading = {this.state.current.loading} list = {this.state.current.list}/>
                {/* <ScrollList  title = 'Current Release' loading = {this.state.current.loading} list = {this.state.current.list}/> */}
            </div>
            )
        }

}

export default HomePage;
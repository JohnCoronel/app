import React from 'react';
import Header from '../common/header'
import ScrollList from '../common/scrollList'
import './home.css';



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
                        list:results.results
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
                        list:response.results
                    }
                })
            })
        })
        }

    render(){
        return (
            <div className = "homepage">
                <Header/>
                <ScrollList title = 'Popular' list = {this.state.popular.list}/>
                <ScrollList  title = 'Current Release' loading = {this.state.current.loading} list = {this.state.current.list}/>
            </div>
            )
        }

}

export default HomePage;
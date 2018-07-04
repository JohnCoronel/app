import React from 'react';


class ImageWithFallback extends React.Component{
    constructor(){
        super();
        this.state = {
            err:false
        }
    }
    handleFallback = () => {
        this.setState({
            err:true
        })
    }
        render(){
            if (this.state.err) return <img src ={this.props.fallbackSrc}/>
            return (
            <img src = {this.props.src} onError = {this.handleFallback}/> )
           
        }
    }

export default ImageWithFallback;
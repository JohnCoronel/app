import React, {Component} from 'react';
import StackItem from './item'
import PropTypes from 'prop-types'
import ExpandIcon from './expand'
import {Segment,Loader} from 'semantic-ui-react'

//TODO - animate scroll left manually
export default class StackedList extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }
    state = {
        stacked:true
    }
    
    //Returns an array of styles array to pass in to child items. [translation:width,opacity,Zindex]
    getItemStyles = (length) => {
        let styles = []
        for(let i = 0; i <length;i++){
            if (i === 0) {
                styles.push([0,1,10])
            }
            else {styles.push([i*120,1 - (.11*i),10-i])}
        }
        return styles
    }

    handleClick = () => {
       let left = this.listRef.current.scrollLeft;
       const delta = left/30;
       console.log(left);
       if(!this.state.stacked){
        timer;
       }
       

       const timer = setInterval(()=>{
            this.listRef.current.scrollLeft = left-delta;
            left = this.listRef.current.scrollLeft
           if (left < 10) {
            clearInterval(timer);
           }
       },16)
        
       this.setState({stacked:!this.state.stacked})
    }
   

    render(){
        const styles = this.getItemStyles(this.props.list.length)
           return (
               <Segment basic>
                <Loader active = {this.props.active}/>
               <div style = {{width:'95%',margin:'auto'}}>
                   <div style = {{display:'flex',margin:'1rem'}}>
                       <h3 style = {{display:'inline-block',margin:'0px'}}>{this.props.title} </h3>
                        <span style = {{padding:'0 1rem'}}onClick = {() => {this.handleClick()}}>
                            <ExpandIcon stacked = {this.state.stacked}/>
                         </span>
                   </div>
               <div ref = {this.listRef} style = {{position:'relative',display:'flex',overflow:'auto',overflowScrolling: "touch",
WebkitOverflowScrolling: "touch"}}>
               { 
                this.props.list.map((item,i) => {
                    return <StackItem key = {i} styles = {styles[i]} item = {item} stacked = {this.state.stacked}/>
                    })  
                }
                </div>
            </div>
        </Segment>
               )
          }


}

StackedList.propTypes = {
    list: PropTypes.array.isRequired,
}
import React, {Component} from 'react';
import StackItem from './item'
import PropTypes from 'prop-types'
import ExpandIcon from './expand'
import {Segment,Loader} from 'semantic-ui-react'


export default class StackedList extends Component {
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

   

    render(){
        const styles = this.getItemStyles(this.props.list.length)
           return (
               <Segment basic>
                   <Loader active = {this.props.loading}/>
                   <div style = {{display:'flex'}}>
                       <h3 style = {{display:'inline-block',margin:'0px'}}>{this.props.title} </h3>
                        <span onClick = {() => this.setState({stacked:!this.state.stacked})}>
                            <ExpandIcon stacked = {this.state.stacked}/>
                         </span>
                   </div>
               <div style = {{position:'relative',display:'flex',overflow:'auto'}}>
               { 
                this.props.list.map((item,i) => {
                    return <StackItem key = {i} styles = {styles[i]} item = {item} stacked = {this.state.stacked}/>
                    })  
                }
                </div>
                </Segment>)
          }


}

StackedList.propTypes = {
    list: PropTypes.array.isRequired,
}
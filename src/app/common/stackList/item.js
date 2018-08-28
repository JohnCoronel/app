import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import MovieCard from '../../common/movieCard'



const stack  = x => keyframes`
        0% { transform:translateX(0);}
        50% {transform:translateX(0);}
        100% {transform: translateX( -${x}px);}
    `
    const expand = x => keyframes`
       from {
            transform:translateX(${-x}px)
       }
       to {
            transform: translateX(0)
       }
    `

// transition: transform .4s ease-in;
// transform: translate(-${props => props.styles.length > 1 && props.stacked ? props.styles[0] : 0}px);

const StackedItem = styled.div`
    position:relative;
    display:inline-block;
    padding: .3rem;
    animation: ${props => props.stacked ? stack(props.styles[0]) : expand(props.styles[0])  } .9s ease 0s 1 normal forwards;
    z-index: ${props => props.styles.length > 1  ? props.styles[2] : 0 };
`   
export default class StackItem extends React.Component {

  
    render(){
        console.log(this.props.styles)

        return (<StackedItem styles = {this.props.styles} stacked = {this.props.stacked}>
                 <MovieCard movie = {this.props.item}/>
               </StackedItem>)
    }
}

StackedItem.propTypes = {
    styles: PropTypes.array.isRequired
}

StackedItem.defaultProps = {
    styles: []
}


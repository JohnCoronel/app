import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MovieCard from '../../common/movieCard'



const StackedItem = styled.div`
    transition: transform .4s ease-in;
    
    position:relative;
    display:inline-block;
    padding: .3rem;
    transform: translate(-${props => props.styles.length > 1 && props.stacked ? props.styles[0] : 0}px);
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


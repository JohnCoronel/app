import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NetflixIcon from '../../common/icons/netflix';
import AmazonIcon from '../../common/icons/amazonIcon'
import HuluIcon from '../../common/icons/hulu';

const Row = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    align-self:center;
    width:130px;
    & svg:first-child {
        opacity: ${props => props.stream.netflix ? '1' : '.5' }
    }

    & svg:nth-child(2){
        opacity: ${props => props.stream.amazon ? '1': '.5'};
        padding-top:2px;
    }

    & svg:nth-child(3) {
        opacity: ${props => props.stream.hulu ? '1': '.5'};
        padding-bottom:3px;
    }

`


const StreamIcons = (props) => {
    
    return (
   <Row stream = {props.stream}>
        <NetflixIcon width ={20}   /> 
        <AmazonIcon width = {22} />
        <HuluIcon width = {45} />
    </Row>
        )
}

StreamIcons.propType  = {
   stream: PropTypes.shape({
        netflix:PropTypes.bool,
        amazon: PropTypes.bool,
        hulu: PropTypes.bool
        }).isRequired
}
StreamIcons.defaultProps = {
    stream : {
        netflix:false,
        amazon:false,
        hulu:false,
    }
}

export default StreamIcons;
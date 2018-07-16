import React from 'react';import 
NetflixIcon from '../../common/icons/netflix';
import AmazonIcon from '../../common/icons/amazonIcon'
import HuluIcon from '../../common/icons/hulu';

const StreamIcons = (props) => {
    const style = {
        display:'flex',
        maxWidth:'100px',
        alignItems:'center',
        justifyContent:'space-between'
    }
    return (
    <div style = {style}>
        <NetflixIcon width ={20} />
        <AmazonIcon width = {20} />
        <HuluIcon width = {40} />
    </div>
        )
}

export default StreamIcons;
import React from 'react'
import './mobileNav.css'
import MenuIcon from './MenuIcon.js';
import HomeIcon from './HomeIcon.js';
import SearchIcon from './SearchIcon';


const MobileNav =() => {
    return <div className = "mobile-nav">
        <ul style = {
            {      
                width:'95%',
                display:'flex',
                justifyContent:'space-around',
                margin: 'auto',
                alignSelf:'center',
                listStyleType:'none',
                paddingLeft:0

             }
            }>
            <li> {<HomeIcon/>}</li>
            <li> {<SearchIcon/>} </li>
            <li>{<MenuIcon/>}</li>
        </ul>    
        </div>
}

export default MobileNav;
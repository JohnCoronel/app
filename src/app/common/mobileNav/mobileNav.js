import React from 'react'
import './mobileNav.css'
import styled from 'styled-components'
import Menu from './Menu';
import MenuIcon from './MenuIcon.js';
import HomeIcon from './HomeIcon.js';
import SearchIcon from './SearchIcon';
import {connect} from 'react-redux';


const Nav = styled.div`
   
    display: none;

    @media(max-width:650px){
        display: ${props => props.inputFocus ? 'none':'flex' };
        z-index:999;
        box-shadow: 0 -1px 1px -1px #cccccc;
        position:fixed;
        bottom:0;
        height:45px;
        width:100%;
        background:#ffffff;
    }

`

const MobileNav = (props) => {
    return < Nav inputFocus = {props.inputFocus}>
        <Menu/>
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
            </Nav>
}

const mapStateToProps = state => {
    return {
        inputFocus: state.navFooter.focus
    }
}
export default connect(mapStateToProps,null)(MobileNav);
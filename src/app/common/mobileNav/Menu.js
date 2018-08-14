import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import User from '../icons/userDefault'
import {ToggleMenu} from '../../actions/menu'


//TODO - Attach Dispatch actions

const MobileMenu = styled.div`
    width: ${ props => props.active ? '75%' : '0px'};
    display:flex;
    flex-direction:column;
    overflow:hidden;
    transition:width .3s;
    background:white;
    top:0;
    right:0;
    position:fixed;
    box-shadow: ${ props => props.active ? '-2px 0px 1px 0px rgba(0, 0, 0, 0.12)' : 'none'};
    height: calc(100vh - 41px);
    z-index:11;
`

const MenuHeader = styled.div`
    margin: 0 auto;
    padding: 2px 5px;
    display:flex;
    align-items:center;
`
const UserDetails = styled.div`
    display:flex;
    padding:5px;
    flex-direction:column;
`

const Button = styled.button`
    border-radius: 25px;
    display:inline-block;
    flex:none;
    margin: 1rem auto;
    width:120px;
    height:40px;
`
const Logout = Button.extend`
    color: white;
    background: blue;

`
const Login = Button.extend`
    color:white;
    background: red;
`
const Register = Button.extend`
    background:red;
    color:white;
`
const Header = styled.h2`
    padding-top:1rem;
    margin: 1rem auto;
    font-family:Righteous;

`
const Menu = (props) => {
    return (<MobileMenu  onClick = {props.ToggleMenu} active = {props.active}>
            <Header> Quetzalcoatl </Header>
            {
                props.user ? <MenuHeader>
                            <User/> <UserDetails> <span>{props.user.username}</span> <span> {props.user.email} </span></UserDetails> 
                             </MenuHeader>
                
                : null
            }
            
            {
                props.auth ?  <Logout> Logout </Logout> : <div> <Login> Sign In </Login> <Register> Register </Register></div>
            }
        </MobileMenu>)

}

const mapStateToProps = (state) => {
    return {
        active:state.mobileMenu.open,
        auth: state.sessionState.auth,
        user: state.sessionState.user
    }
}


export default connect(mapStateToProps,{ToggleMenu})(Menu);


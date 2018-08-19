import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import styled from 'styled-components'
import User from '../icons/userDefault'
import {ToggleMenu} from '../../actions/menu'
import {Logout} from '../../actions/index'

//TODO - Attach Dispatch actions

const MobileMenu = styled.div`
    transform: ${props => props.active ? 'translateX(0)':'translateX(75vw)'};
    transition: transform .3s ease-in-out;
    
    display:flex;
    width: 75vw;
    flex-direction:column;
    overflow:hidden;
    background:white;
    top:0;
    right:0;
    position:fixed;
    box-shadow: ${ props => props.active ? '-2px 0px 1px 0px rgba(0, 0, 0, 0.12)' : 'none'};
    height: calc(100vh - 45px);
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
    background: linear-gradient(to right, #ffafbd, #ffc3a0);
    border:none;
    border-radius: 25px;
    display:inline-block;
    margin: 1rem auto;
    width:120px;
    color:white;
    height:45px;
`
const LogoutBtn = Button.extend`
    color: white;
    background: blue;

`
const Login = Button.extend`

`
const Register = Button.extend`
`
const ButtonGroup = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Header = styled.h2`
    padding-top:1rem;
    margin: 1rem auto;
    font-family:Righteous;
`

const LogoutRedirect = (props) => {
    props.history.push('/')
    props.Logout()
}
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
            props.auth ?  <LogoutBtn onClick = {() => LogoutRedirect(props)}> Logout </LogoutBtn> : 
            <ButtonGroup>  <Link to = "/login"><Login> Sign In </Login></Link><Link to = "register"><Register> Register </Register></Link> </ButtonGroup>
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


export default withRouter(connect(mapStateToProps,{Logout,ToggleMenu})(Menu));


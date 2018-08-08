import React from 'react';
import {Logout} from '../../../actions/index'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import UserIcon from './userIcon'


const Menu = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    z-index:5;
    border-radius: 5px;
    right:.5rem;
    margin-top:1rem;
    position:absolute;
    background: #fff;
    height: 25rem;
    width:20rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`
const MenuHeader = styled.div`
    align-items:center;
    margin: 0 auto;
    padding:5px;
    display: flex;
`
const HeaderInfo = styled.div`
    padding:5px;
`

const MenuFooter = styled.div`
    padding:5px;
    background: #F0F0F0;
    display:flex;
    justify-content:space-between;
`

const UserName = styled.h4`
    margin:0;
`
const Email = styled.h5`
    font-weight:400;
    margin:0;
`

const handleLogOut = (props) => {
    props.history.push('/')
    props.logout()
   
}

const UserMenu = (props) => {
console.log(props)
    return (
        <Menu>
            <MenuHeader>
                <UserIcon width = {40}/>
                <HeaderInfo>
                 <UserName> {props.user.username}</UserName>
                 <Email>{props.user.email}</Email>
                </HeaderInfo>
                
            </MenuHeader>
            <MenuFooter>
                 <span> Settings</span>
                <span onClick = {() => handleLogOut(props)}> Logout </span>
            </MenuFooter>
        </Menu>
    )

}

const mapDispatchToProps = {
    logout: () => Logout()
}
export default withRouter(connect(null,mapDispatchToProps)(UserMenu));
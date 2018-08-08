import React from 'react';
import RegisterBtnLink from '../buttons/registerButton'
import SignInBtn from '../buttons/signInBtn'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import UserProfile from './icons/UserProfile'
import SearchBar from  './searchbar/SearchBar';
import './header.css';

const Header = (props) => (
    
    <div className = "nav-header">
    
    <div className = "logo"><Link to ="/"> <h1>Quetzalcoatl</h1></Link></div>
        
        <ul className = "nav">
             <SearchBar/>
             {
                 props.authorized ? <div> <UserProfile/> </div> : <div> <SignInBtn/> <RegisterBtnLink/> </div>
             }
         </ul>
        
    </div>
)

const mapStateToProps = (state) => {
    return {
    authorized: state.sessionState.auth,
    user: state.sessionState.user
    }
}
export default connect(mapStateToProps,null)(Header);
import React from 'react';
import {Link} from 'react-router-dom'
import UserIcon from './icons/UserIcon'
import NotificationIcon from './icons/NotificationIcon';
import SearchBar from  './searchbar/SearchBar';
import './header.css';

const Header = () => (
    <div className = "nav-header">
    
   <Link to ="/"> <h1>Quetzalcoatl </h1></Link>
        
        <ul className = "nav">
             <SearchBar/>
             
         </ul>
        
    </div>
)

export default Header;
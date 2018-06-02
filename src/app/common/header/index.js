import React from 'react';
import UserIcon from './icons/UserIcon'
import NotificationIcon from './icons/NotificationIcon';
import SearchBar from  './searchbar/SearchBar';
import './header.css';

const Header = () => (
    <div className = "nav-header">
    
    <h1>Quetzalcoatl </h1>
        
        <ul className = "nav">
             <SearchBar/>
             <NotificationIcon/>
             <UserIcon/> 
         </ul>
        
    </div>
)

export default Header;
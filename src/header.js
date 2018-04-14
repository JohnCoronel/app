import React from 'react';
import UserIcon from './components/header/UserIcon';
import NotificationIcon from './components/header/NotificationIcon';
import SearchBar from './components/header/SearchBar';
import './style/app.css';

const Header = () => (
    <div className = "navbar">
    
    <h1> Quetzalcoatl </h1>
        <SearchBar/>
        <ul className = "nav">
             <NotificationIcon/>
             <UserIcon/> 
         </ul>
        
    </div>
)

export default Header;
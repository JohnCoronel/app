import React from 'react';
import UserMenu from './userMenu'
import UserIcon from './userIcon'
import {connect} from 'react-redux'


//TODO -- conditonal render svg when no user profile
class UserProfile extends React.Component {
	constructor(){
		super();
		this.state = {
			displayMenu : false,
		}
	}

	showDropDownMenu = (e) => {
		e.preventDefault();
		this.setState({
			displayMenu:!this.state.displayMenu
		})

	}

	hideDropDownMenu = (e) => {
		
	}

	
    render() {
		const user = this.props.user
		return (
		<div style = {{position:'relative',margin:'0 1.5em'}} onClick = {this.showDropDownMenu}>
		<UserIcon />
		{
			this.state.displayMenu ? <UserMenu user = {user}/> : null
		}
		</div>
		)
            
        
    }
}

const mapStateToProps = (state) => {
	return {
		user:state.sessionState.user
	}
}



export default connect(mapStateToProps)(UserProfile);
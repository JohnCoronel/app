import React from 'react';
import {signIn} from '../actions'
import './login.css';
import { connect } from 'react-redux';

 class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    componentDidUpdate() {
        if(this.props.authError === null && this.props.auth === true){
            this.props.history.push('/')
        }

    }


    handleSignIn = (e) => {
        e.preventDefault();
        this.props.signIn(this.state.email,this.state.password)
       
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return (
            <div className = "login-page">
                <div className = "login-page_content">
                    <form className = "login-form">
                        <div className = "ui segment">
                        <h2> Login </h2>
                            <div className = "field">
                                <div className = "ui left icon input">
                                    <i className = "user icon"> </i>
                                    <input onChange = {this.handleChange} value = {this.state.email} type = "text" name = "email" placeholder = "E-mail address"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "ui left icon input">
                                    <i className = "lock icon"> </i>
                                    <input onChange = {this.handleChange} value = {this.state.password} type = "password" name = "password" placeholder = "Password"/>
                                </div>
                            </div>
                            <button className = "login-btn" onClick = {this.handleSignIn}> Login </button>
                            <button className = "register-btn"> Register </button> 
                                {this.props.authError ? this.props.authError.message : null}
                        </div>    
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.sessionState.authError,
        authUser: state.sessionState.user,
        authLoading:state.sessionState.authLoading,
        auth:state.sessionState.auth
    }
}

export default connect(mapStateToProps,{signIn})(LoginPage)
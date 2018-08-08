import React from 'react'
import {Form,Button} from 'semantic-ui-react'
import './register.css';
import {connect} from 'react-redux';
import {register} from '../actions/index'

 class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            username:'',
            password:'',
            passwordConfirm:'',
            error:null
        }
    }
    componentDidUpdate(){
        if(this.props.auth === true && this.props.authError === null){
            this.props.history.push('/')
        }
    }

   handleChange = evt => {
       this.setState({[evt.target.name]:evt.target.value});
   }

   onSubmit = evt => {
       evt.preventDefault();
       if(this.validate()){
        this.props.register(this.state.email,this.state.username,this.state.password)
       }
   }

   validate = () => {
    if (this.state.password !== this.state.passwordConfirm){
        this.setState({error:'passwords do not match'})
        return false;
    }  
    return true
   }


    render() {
        const {
            email,
            username,
            password,
            passwordConfirm,
            error,
        } = this.state;
        return (
            <div className = "register-page">
                <Form onSubmit = { (evt) => {this.onSubmit(evt)}}className ="register-form">
                        <h2> Register </h2>
                        <Form.Field className = "register-field">
                            <input name = "email" value = {email} onChange = {this.handleChange} placeholder = "Email" type = "email" required />
                        </Form.Field>
                        <Form.Field className = "register-field">
                            <input name ="username" placeholder = "Username" value = {username} onChange = {this.handleChange} required/>
                        </Form.Field>
                        <Form.Field className = "register-field">
                            <input name = "password" placeholder = "Password" type = "password" value = {password} onChange = {this.handleChange} required/>
                        </Form.Field>
                        <Form.Field className = "register-field" >
                            <input name = "passwordConfirm" placeholder = "Confirm Password" type ="password" value = {passwordConfirm} onChange = {this.handleChange} required/>
                        </Form.Field>
                       
                        <Button className = "register-btn"> Register </Button>   
                        {error}
                        {this.props.authError ? this.props.authError.message: null}
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError:state.sessionState.authError,
        authUser: state.sessionState.user,
        auth:state.sessionState.auth
    }
}

export default connect(mapStateToProps,{register})(RegisterPage)
import {auth} from './config';


const register = (email,password) => {
    auth.createUserWithEmailAndPassword(email,password) 
    .catch(((err) => {
        let errorCode = err.code;
        let errorMessage = err.message;
    }))
}

const login = (email,password) => {
    auth.signInWithEmailAndPassword(email,password)
    .then()
}

const logout = () => {
    auth.signOut().then(function(){

    }).catch( (err)=> {
        
    })
}
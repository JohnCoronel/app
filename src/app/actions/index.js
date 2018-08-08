import {auth,db} from '../firebase/config'

export const Logout = () => dispatch => {
    auth.signOut().then(function(){
       dispatch({
           type: 'LOG_OUT'
       })
    }).catch(function(err){
        console.log(err)
    })
}


export const fetchUser = () => dispatch => {
    auth.onAuthStateChanged(user => {
        if (user) {
           const userRef = db.collection("users").doc(user.uid)
           userRef.get().then(ref => {
                dispatch({
                    type:'FETCH_USER',
                    payload:ref.data()
                })
                dispatch({
                    type:'SET_AUTH',
                    payload:true
                })
           })
        }
        else {
            dispatch({
            type: 'FETCH_USER',
            payload:null,
            })
        }
    })
}

export const signIn = (username,password) => dispatch => {
     dispatch({
         type:'AUTH_LOADING',
         payload:true
     })
     auth
    .signInWithEmailAndPassword(username,password)
    .then(
         dispatch({
             type:'AUTH_LOADING',
             payload:false
         })
    )
    .catch(error => {
        dispatch({
            type:'AUTH_ERROR',
            payload:error
        })
    })

}

export const register = (email,username,password) => dispatch => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(result => {db.collection("users").doc(result.user.uid).set({
        username:username,
        email:email,
        uid:result.user.uid
    })
})
    .catch(error => {
        dispatch({
            type: 'AUTH_ERROR',
            payload:error
        })
    })
}

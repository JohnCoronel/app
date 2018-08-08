
const INITIAL_STATE = {
    user:null,
    auth:false,
    authError:null,
    authLoading:false
}



function sessionReducer(state = INITIAL_STATE,action){
    switch(action.type){
        case 'FETCH_USER': {
            return {
                ...state,
                user:action.payload,
                authError:null
            }
        }
        case 'SET_AUTH': {
            return {
                ...state,
                auth:action.payload
            }
        }
        case 'LOG_OUT': {
            return INITIAL_STATE
        }
        case 'AUTH_ERROR': {
            return {
                ...state,
                authError:action.payload
            }
        }
        case 'AUTH_LOADING': {
            return {
                ...state,
                authLoading:action.payload
            }
        }

        default: return state;
    }
}
export default sessionReducer;
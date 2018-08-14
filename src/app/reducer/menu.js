
const INIT_STATE = {
    open:false
}

function menuReducer(state = INIT_STATE,action){
    switch(action.type){
    case ('TOGGLE'): {
        return {
            open: !state.open
        } 
    }

    default: return state;
    }
}

export default menuReducer;
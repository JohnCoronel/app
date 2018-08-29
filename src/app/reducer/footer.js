const INIT_STATE = {
    focus:false
}

const navReducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case 'FOCUS': {
            return {
                focus:true
            }
        }
        case 'BLUR': {
            return {
                focus:false
            }
        }
    default:
            return state    
    }
}

export default navReducer;
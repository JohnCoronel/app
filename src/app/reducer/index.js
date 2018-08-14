import {combineReducers} from 'redux'

import sessionReducer from './session'
import MenuReducer from './menu'

const rootReducer = combineReducers({
    sessionState :sessionReducer,
    mobileMenu: MenuReducer,
    
})

export default rootReducer;
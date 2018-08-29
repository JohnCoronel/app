import {combineReducers} from 'redux'

import sessionReducer from './session'
import MenuReducer from './menu'
import NavReducer from './footer'

const rootReducer = combineReducers({
    sessionState :sessionReducer,
    mobileMenu: MenuReducer,
    navFooter:NavReducer,
    
})

export default rootReducer;
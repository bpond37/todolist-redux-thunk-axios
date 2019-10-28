
import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import helloReducer from './helloReducer'

const rootReducer = combineReducers({todoReducer,helloReducer})

export default rootReducer
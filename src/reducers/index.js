import { combineReducers } from 'redux'
import postReducer from './postReducer'
import studentReducer from './studentReducer'

const rootReducer = combineReducers({
    posts: postReducer,
    students: studentReducer,
})

export default rootReducer
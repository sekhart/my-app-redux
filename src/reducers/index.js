import { combineReducers } from 'redux'
import postReducer from './postReducer'
import usersReducer from './userReducer'

const rootReducer = combineReducers({
    posts: postReducer,
    users: usersReducer,
})

export default rootReducer
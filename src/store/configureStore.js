import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userLoggedInReducer from '../reducers/userLoggedInReducer'
import notesReducer from '../reducers/notesReducer'

const configureStore = () => {

    const store = createStore(combineReducers({
        userLoggedIn : userLoggedInReducer,
        notes : notesReducer
    }),applyMiddleware(thunk))

    return store
}

export default configureStore
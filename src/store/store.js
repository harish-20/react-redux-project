import { createStore } from 'redux'
import { userReducer } from './reducers/userReducer'

//creating a store to user info
export const store = createStore(userReducer)

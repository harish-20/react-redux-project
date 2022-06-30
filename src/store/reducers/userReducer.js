import { ADD_USER, CLEAR_USERS } from '../actions/actions'
export const inital = []
export const userReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]
    case CLEAR_USERS:
      return inital
    default:
      return state
  }
}

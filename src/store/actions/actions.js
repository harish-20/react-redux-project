export const ADD_USER = 'ADD_USER'
export const CLEAR_USERS = 'CLEAR_USERS'

export const addUser = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  }
}

export const clearUsers = () => {
  return {
    type: CLEAR_USERS,
  }
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearUsers } from '../store/actions/actions'

const Info = () => {
  const users = useSelector((state) => {
    return state
  })
  const dispatch = useDispatch()
  return (
    <div className="info-container">
      <table className="info-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.hobby}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={() => dispatch(clearUsers())}>clear all</button>
      <NavLink className={'link'} to="/">
        Home
      </NavLink>
    </div>
  )
}

export default Info

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addUser } from '../store/actions/actions'

const Home = () => {
  //state to store user info
  const init = {
    name: '',
    age: '',
    hobby: '',
  }
  const [user, setUser] = useState(init)

  //getting dispatch
  const dispatch = useDispatch()

  //when ever user type a key it will update on state
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  //when user submit it dispatch the value with all data in form
  const handleSubmit = (e) => {
    e.preventDefault()
    const values = Object.values(user)
    let isFilled = true
    for (let i = 0; i < values.length; i++) {
      if (values[i] === '') {
        isFilled = false
      }
    }

    if (isFilled) {
      dispatch(addUser(user))
      setUser(init)
    } else {
      alert('fill all fileds')
    }
    document.getElementById('name').focus()
  }

  return (
    <div className="form-container">
      <h1> USER INFORMATION FORM</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h3>Name :</h3>
        <input
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <h3>Age :</h3>
        <input
          name="age"
          type="number"
          value={user.age}
          onChange={handleChange}
        />
        <h3>Hobby :</h3>
        <input name="hobby" value={user.hobby} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      <br />
      <NavLink className={'link'} to="/Info">
        Info
      </NavLink>
    </div>
  )
}

export default Home

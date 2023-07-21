import React, { useState } from 'react'
import Axios from 'axios';

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const register = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:4000/register", user);
  }
  return (
    <>
    <form className="register" onSubmit={(e) => register(e)} >
      <h1>Register</h1>
      <input
        type='text'
        placeholder='Enter User Name'
        value={username}
        name='username'
        onChange={(e) => onInputChange(e)}
      />
      <input
        type='password'
        placeholder='Enter Password'
        value={password}
        name='password'
        onChange={(e) => onInputChange(e)}
      />
      <button type='submit'>Register</button>
    </form>
  </>
  )
}

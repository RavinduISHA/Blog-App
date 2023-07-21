import React, { useState } from 'react'
import Axios from 'axios';

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const login = async (e) => {
    e.preventDefault();
    const res = await Axios.post("http://localhost:4000/login", user);
    if(res.status !== 200){
      alert('registration Failed!');
    } else {
      alert('registration Success');
    }
  }
  return (
    <>
    <form className="register" onSubmit={(e) => login(e)} >
      <h1>Login</h1>
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
      <button type='submit'>Login</button>
    </form>
  </>
  )
}

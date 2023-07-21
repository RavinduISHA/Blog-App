import React from 'react'

export default function Login() {
  return (
    <>
      <form action='' className='login'>
        <h1>Login</h1>
        <input type='text' placeholder='Enter User Name'/>
        <input type='password' placeholder='Enter Password'/>
        <button>Login</button>
      </form>
    </>
  )
}

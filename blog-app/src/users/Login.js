import React, { useState } from 'react'

export default function Login({ setUser }) {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  function submitForm(e) {
    e.preventDefault();
    setUser(username)
  }

  function handleNameChange({ target: { value }}) {
    setUsername(value)
  }

  function handlePasswordChange({ target: { value }}) {
    setPassword(value)
  }

  return (
    <form onSubmit={ submitForm }>
      <label htmlFor="login-username">Username:</label>
      <input type="text" name="login-username" id="login-username" value={ username } onChange={ handleNameChange } />
      <label htmlFor="login-password">Password:</label>
      <input type="password" value={password} name="login-password" id="login-password" onChange={ handlePasswordChange } />
      <input type="submit" value="Login" disabled={ username.length === 0 } />
    </form>
  )
}
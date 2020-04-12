import React, { useState } from 'react'

export default function Register( { setUser }) {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordRepeat, setPasswordRepeat ] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    setUser(e.target.value)
  }

  function handleNameChange({ target: { value }}) {
    setUsername(value)
  }

  function handlePasswordChange({ target: { value }}) {
    setPassword(value)
  }

  function handlePasswordRepeatChange({ target: { value }}) {
    setPasswordRepeat(value)
  }

  return (
    <form onSubmit={ handleFormSubmit }>
      <label htmlFor="register-username">Username:</label>
      <input type="text" name="register-username" id="register-username" value={ username } onChange={ handleNameChange } />
      <label htmlFor="register-password">Password:</label>
      <input type="password" name="register-password" id="register-password" value={ password } onChange={ handlePasswordChange } />
      <label htmlFor="register-password">Repeat Password:</label>
      <input type="password" name="register-repeat-password" id="register-repeat-password" value={ passwordRepeat } onChange={ handlePasswordRepeatChange } />
      <input type="submit" value="Register" disabled={ username.length === 0 || password !== passwordRepeat } />
    </form>
  )
}
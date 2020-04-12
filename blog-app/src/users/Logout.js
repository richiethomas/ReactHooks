import React from 'react'

export default function Logout({ user, setUser }) {
  function handleLogout(e) {
    e.preventDefault()
    setUser('')
  }

  return (
    <form onSumbmit={ handleLogout }>
      Logged in as: <b>{ user }</b>
      <input type="submit" value="Logout" />
    </form>
  )
}
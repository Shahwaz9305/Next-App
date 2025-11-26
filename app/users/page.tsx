import React from 'react'
import UsersTable from './UsersTable'

const User = async() => {

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UsersTable/>
    </div>
  )
}

export default User

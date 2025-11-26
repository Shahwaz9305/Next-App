import React from 'react'
import UsersTable from './UsersTable'
interface Props{
  searchParams:{
    sortOrder:string;
  }
}
const User = async({searchParams}:Props) => {
const {sortOrder} = await searchParams
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UsersTable sortOrder={sortOrder}/>
    </div>
  )
}

export default User

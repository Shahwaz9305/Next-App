import React from 'react'
import UsersTable from './UsersTable'
import Link from 'next/link';
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
      <Link className='btn btn-success' href={'/users/new'}>New user</Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <UsersTable sortOrder={sortOrder}/>
    </div>
  )
}

export default User

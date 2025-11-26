import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-slate-200 p-5 text-black'>
      <Link href={'/'} className='mr-5'>Home</Link>
      <Link href={'/users'}>Users</Link>
    </div>
  )
}

export default NavBar

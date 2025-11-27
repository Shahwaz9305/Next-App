import { notFound } from 'next/navigation';
import React from 'react'
interface Props{
  params:{
    id:number;
  }
}
const UserDetailsPage = async ( {params}:Props) => {
  
  const {id} = await params
  if(id>10) notFound()
  return (
    
    <div>
      
      <h1>UserDetails {id}</h1>
      
    </div>
  )
}

export default UserDetailsPage

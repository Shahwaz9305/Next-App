import React from 'react'
interface User{
  id:number;
  name:string;
}
const User = async() => {
const res=  await fetch("https://jsonplaceholder.typicode.com/users",{
  cache:'no-cache'
});
const Users :User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>{Users.map(user=> <li key={user.id}> {user.name} 
        
      </li> )
        
      }
      </ul>

    </div>
  )
}

export default User

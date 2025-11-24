import React from 'react'
interface User{
  id:number;
  name:string;
}
const User = async() => {
const res=  await fetch("https://jsonplaceholder.typicode.com/users");
const Users :User[] = await res.json();
  return (
    <div>
      <ul>{Users.map(user=> <li key={user.id}> {user.name} 
        
      </li> )
        
      }
      </ul>

    </div>
  )
}

export default User

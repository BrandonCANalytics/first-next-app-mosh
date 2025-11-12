import React from 'react'
import Link from "next/link";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users:User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name} (id: {user.id})</li>)}
      </ul>
      <Link href='/'>Back to Home</Link>
    </>
  
  )
}

export default UsersPage
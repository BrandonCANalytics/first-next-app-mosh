import React from 'react'
import Link from "next/link";
import UserTable from './UserTable';

 

const UsersPage = async () => {


  return (
    <>
      <h1>Users</h1>
      <UserTable/>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href='/'>Back to Home</Link>
    </>
  
  )
}

export default UsersPage
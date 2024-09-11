import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // This will save result in built-in cache
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // This will disable cache
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });

  // This will get fresh data from backend for every 10s
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } });


  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td></tr>)}
        </tbody>
      </table>

    </>
  )
}

export default UsersPage
import React from 'react'

interface User {
  id: number;
  name: string;
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
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>

    </>
  )
}

export default UsersPage
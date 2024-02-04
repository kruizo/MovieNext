import React from "react";

interface User {
  name: string;
  id: number;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });

  // const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: {revalidate: 10}});
  const user: User[] = await res.json();
  return (
    <>
      <h1>User</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
 
    </>
  );
};

export default UsersPage;

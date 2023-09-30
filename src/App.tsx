import React, { useEffect, useState } from 'react';
import "./App.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

type User = {
  id: string
  firstName: string
  lastName: string
  age: number,
  address: string,
  department: string
}

function App() {
  const [users, setUsers] = useState<Array<User>>([])

  async function fetchUsers() {
    const userList = await axios.get("http://localhost:3000/users")
    setUsers(userList.data)
  }

  async function handleDelete(userID: string) {
    await axios.delete(`http://localhost:3000/users/${userID}`)
    fetchUsers()
  }

  useEffect(function () {
    fetchUsers()
  }, [])

  return (
    <div>
      <h1 className='heading'>Users List</h1>
      <p className='btn-create-user'>
        <Link to="user/create" className='create-user-link'>Create new user</Link>
      </p>
      <table id="customers">
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Department</th>
          <th colSpan={2}>Action</th>
        </tr>
        {
          users.map(function (user) {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.age}</td>
                <td>{user.department}</td>
                <td><Link to={`edit/${user.id}`} className='users-edit'>Edit user</Link></td>
                <td><button className='users-delete' onClick={() => {
                  handleDelete(user.id)
                }}>Delete User</button></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;

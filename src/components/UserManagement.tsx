// UserManagement.js
import React, { useState } from 'react';

// Define a User interface to represent the structure of user objects
interface User {
  username: string;
  password: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Provide type information for the users state
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null); // Provide type information for loggedInUser
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Function to register a new user
  const registerUser = () => {
    // Check if the username is unique
    if (users.find((user) => user.username === newUsername)) {
      alert('Username already exists. Choose a different username.');
      return;
    }

    setUsers([...users, { username: newUsername, password: newPassword }]);
  };

  // Function to log in a user
  const loginUser = () => {
    const user = users.find(
      (user) => user.username === loginUsername && user.password === loginPassword
    );
    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid username or password.');
    }
  };

  // Function to log out
  const logoutUser = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>Welcome, {loggedInUser.username}!</p>
          <button onClick={logoutUser}>Log Out</button>
        </div>
      ) : (
        <div>
          <h2>User Management</h2>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={registerUser}>Register</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={loginUser}>Log In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;

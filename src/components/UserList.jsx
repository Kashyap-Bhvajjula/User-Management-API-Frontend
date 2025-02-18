import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [activeUserId, setActiveUserId] = useState(null); // To track which user details to show

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleUserClick = (id) => {
    if (activeUserId === id) {
      setActiveUserId(null); // Close dropdown if clicking the same user again
    } else {
      setActiveUserId(id); // Open the dropdown for the selected user
    }
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul className='users'>
        {users.map((user) => (
          <li key={user._id} className="user-item">
            <div className="user-name" onClick={() => handleUserClick(user._id)}>
              {user.name}
            </div>

            {/* Show details if the user is selected */}
            {activeUserId === user._id && (
              <div className="user-details-dropdown">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Role:</strong> {user.roles.join(', ')}</p>
                <p><strong>User ID:</strong> {user._id}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
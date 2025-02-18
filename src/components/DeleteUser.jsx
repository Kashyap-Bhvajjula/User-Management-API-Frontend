import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, deleteUser } from '../services/userService'; // Adjust the service imports accordingly

const DeleteUser = () => {
  const { id } = useParams(); // Get the user ID from the URL params
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserById(id); // Fetch user details by ID
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteUser(id); // Call delete API with user ID
      alert('User deleted successfully!');
      navigate('/'); // Redirect to home page after deletion
    } catch (error) {
      setError('Error deleting user');
    }
  };

  return (
    <div className="delete-user">
      <h2>Delete User</h2>
      {error && <p className="error">{error}</p>}
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Role:</strong> {user.roles.join(', ')}</p>
          <button onClick={handleDelete} className='deleteBtn'>Confirm Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DeleteUser;

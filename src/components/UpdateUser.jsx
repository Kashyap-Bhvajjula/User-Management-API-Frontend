import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, getUserById } from '../services/userService'; // Adjust the service imports accordingly

const UpdateUser = () => {
  const { id } = useParams(); // Get the user ID from the URL params
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserById(id); // Fetch user details by ID
        setName(data.name);
        setEmail(data.email);
        setAge(data.age);
        setRoles(data.roles);
      } catch (error) {
        console.error('Error fetching user:', error);
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = { name, email, age, roles };

    try {
      await updateUser(id, updatedUser); // Call update API with user ID
      alert('User updated successfully!');
      navigate('/'); // Redirect to home page after update
    } catch (error) {
      setError('Error updating user');
    }
  };

  return (
    <div className="update-user container">
      <h2>Update User</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Role</label>
          <select
            value={roles}
            onChange={(e) => setRoles([e.target.value])}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className='updateUserBtn'>Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;

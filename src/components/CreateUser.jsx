// src/components/CreateUser.jsx
import React, { useState } from 'react';
import { createUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [roles, setRoles] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, age:parseInt(age), roles };

    try{
      await createUser(newUser);
      setName('');
      setEmail('');
      setAge('');
      setRoles('user');
      alert('User created successfully!');
      navigate('/');
    }
    catch(error){
      console.error('Error creating user:', error);}
  };

  return (
    <div className="container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='What do we call you...'
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Drop your mail address...'
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            placeholder='How Young are you...'
          />
        </div>
        <div>
          <label>Role: </label>
          <select value={roles} onChange={(e) => setRoles(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className='createBtn'>Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;

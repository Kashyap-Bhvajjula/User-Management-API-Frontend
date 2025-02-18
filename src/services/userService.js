import axios from 'axios';

const API_URL = 'http://localhost:3000/users';  // Ensure this matches your backend API endpoint


// Fetch all users
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Return the data from the backend
  } catch (error) {
    console.error('Error fetching users: ', error);
    return [];  // Return an empty array to avoid breaking the app in case of error
  }
};

// Create a user
export const createUser = async (userData) => {
  try {
      const response = await fetch(`${API_URL}`, {  // Use backend port 3000
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      });

      if (!response.ok) {
          throw new Error('Failed to create user');
      }

      return await response.json();
  } catch (error) {
      console.error('Error in createUser:', error);
      throw error;
  }
};


// Update user

// Get user by ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update user by ID
export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`http://localhost:3000/users/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Delete user by ID
export const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


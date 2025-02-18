import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterUserIdForDelete = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      navigate(`/delete-user/${userId}`); // Redirect to the delete confirmation page
    }
  };

  return (
    <div className="enter-user-id">
      <h2>Enter User ID to Delete</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit" className='deleteBtn'>Go to Delete User</button>
      </form>
    </div>
  );
};

export default EnterUserIdForDelete;

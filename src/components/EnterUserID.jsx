import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterUserId = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      navigate(`/update-user/${userId}`); // Redirect to the update form with the user ID in the URL
    }
  };

  return (
    <div className="enter-user-id">
      <h2>Enter User ID to Update</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit" className='updateFormBtn'>Go to Update Form</button>
      </form>
    </div>
  );
};

export default EnterUserId;

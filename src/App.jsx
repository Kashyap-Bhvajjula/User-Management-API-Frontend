import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import EnterUserId from './components/EnterUserID';  // Existing component for entering user ID for update
import EnterUserIdForDelete from './components/EnterUserIdForDelete';  // New component for entering user ID for delete
import './styles/global.css'; // Make sure you include your global CSS file
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <h1>Welcome to User Management</h1>
          <div className="action-buttons">
            <Link to="/">
              <button className="action-btn">Home</button>
            </Link>
            <Link to="/user-list">
              <button className="action-btn">Show Users</button>
            </Link>
            <Link to="/create-user">
              <button className="action-btn">Create User</button>
            </Link>
            <Link to="/update-user-id">
              <button className="action-btn">Update User</button>
            </Link>
            <Link to="/delete-user-id">
              <button className="action-btn">Delete User</button>
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/user-list" element={<UserList />} /> 
          <Route path="/update-user-id" element={<EnterUserId />} /> {/* New route for entering user ID for update */}
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="/delete-user-id" element={<EnterUserIdForDelete />} /> {/* New route for entering user ID for delete */}
          <Route path="/delete-user/:id" element={<DeleteUser />} /> {/* Route for confirming and deleting */}
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <p className='intro'>
        This is a simple user management application. <br />Where you can create, read, update, and delete users.
      </p>
    </div>
  );
};

export default App;

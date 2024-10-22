import React, { useState } from 'react';
// import './Account.css'; // Import the CSS file

const Account = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(!isEditing);
  const handleDelete = () => {
    // Delete account logic here
    alert('Account deleted!');
  };

  const handleLogout = () => {
    setUser(null);
    alert('Logged out!');
  };

  return (
    <div className="account-container">
      <h1 className="account-header">Profile Information</h1>
      {isEditing ? (
        <div className="edit-form">
          <input type="text" defaultValue={user.firstName} />
          <input type="text" defaultValue={user.lastName} />
          <input type="number" defaultValue={user.age} />
          <input type="email" defaultValue={user.email} />
          <button onClick={handleEdit}>Save Changes</button>
        </div>
      ) : (
        <div className="profile-details">
          <p><span>First Name:</span> {user.firstName}</p>
          <p><span>Last Name:</span> {user.lastName}</p>
          <p><span>Age:</span> {user.age}</p>
          <p><span>Email:</span> {user.email}</p>
        </div>
      )}

      <div className="account-actions">
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
        <button className="delete-btn" onClick={handleDelete}>Delete Account</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;

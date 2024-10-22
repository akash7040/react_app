import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
  });
  const navigate = useNavigate(); // Use navigate hook for redirection

  useEffect(() => {
    // Populate formData with user details when the user changes
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        age: user.age || '',
        gender: user.gender || '',
        mobile: user.mobile || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setUser({ ...user, ...formData }); // Update user state with new data
      setIsEditing(false);
      alert('Profile updated successfully!');
    } else {
      alert('Failed to update profile. Please try again.');
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setUser(null); // Clear user state
      alert('Account deleted successfully.');
      navigate('/'); // Redirect to login after deletion
    } else {
      alert('Failed to delete account. Please try again.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    alert('Logged out successfully.');
    navigate('/'); // Redirect to login page after logout
  };

  if (!user) {
    return <p>Please log in to view your profile.</p>; // Handle case where user is null
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            readOnly
            required
          />
          <button type="submit">Update Profile</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Mobile: {user.mobile}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleDelete}>Delete Account</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

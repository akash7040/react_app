import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the App!</h1>
      <p className="home-description">
        This application allows you to register, login, and manage your profile effortlessly.
      </p>
      <div className="button-container">
        <Link to="/login" className="btn btn-login">Login</Link>
        <Link to="/register" className="btn btn-register">Register</Link>
      </div>
    </div>
  );
};

export default Home;

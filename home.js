import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


const Home = () => {
  return (
    <div className="home-container">
      <div className="wrapper">
        <div className="logo">
          <img src="image-removebg-preview (1).png" alt="Logo" />
        </div>

        <div className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
      <Link to="/login" className="login-button">
        Login
      </Link>
    </div>
      </div>

      <div className="judul">
        <h1>Personal Recipe</h1>
      </div>

      <div className="isihalaman">
        <p>Portal lengkap untuk menemukan berbagai macam resep makanan</p>
        <p>Start Your Food Adventure!</p>
        <Link to="/main" className="get-started-link">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
    
  );
};

export default Home;

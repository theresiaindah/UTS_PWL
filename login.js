import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-control" />
        </div>
        <Link to="/main" className="btn btn-primary">Login</Link> {/* Tambahkan tautan ke halaman utama */}
        <Link to="/daftarakun" className="btn btn-secondary">Daftar</Link> {/* Tambahkan tautan ke halaman daftarakun.js */}
      </form>
    </div>
  );
};

export default Login;

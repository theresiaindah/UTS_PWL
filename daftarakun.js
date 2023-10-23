import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './daftarakun.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda dapat menambahkan logika untuk mengirim data pendaftaran ke server atau melakukan validasi
    // Misalnya, Anda bisa memeriksa apakah kata sandi dan konfirmasi kata sandi cocok sebelum mengirimnya.

    // Jika valid, lakukan proses pendaftaran atau pengiriman data
    // Jika tidak valid, tampilkan pesan kesalahan atau peringatan.
  };

  return (
    <div className="signup-container">
      <h1>Daftar</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Nomor Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirmation">Konfirmasi Kata Sandi</label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Signup;

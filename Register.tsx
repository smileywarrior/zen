import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './auth.css';


const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
        role,
      });

      // Redirect to login page
      navigate('/login');
    } catch (err: any) {
       console.error(err);  
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-wrapper">
      <h2>Create Account</h2>
      <div className="auth-box">
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <select value={role} onChange={(e) => setRole(e.target.value as 'user' | 'admin')}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Create Account</button>

          {error && <p className="warning">{error}</p>}
        </form>
        <p className="signup">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

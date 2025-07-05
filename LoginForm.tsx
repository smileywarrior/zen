import React, { useState, useEffect, useRef } from 'react';
import './auth.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [positionIndex, setPositionIndex] = useState(0);
const navigate = useNavigate();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];

  useEffect(() => {
    if (username.trim() !== '' && password.trim() !== '') {
      setIsDisabled(false);
      resetButtonPosition();
    } else {
      setIsDisabled(true);
      shiftButton();
    }
  }, [username, password]);

  const shiftButton = () => {
    const current = positions[positionIndex];
    const next = positions[(positionIndex + 1) % positions.length];

    if (btnRef.current) {
      btnRef.current.classList.remove(current);
      btnRef.current.classList.add(next);
    }

    setPositionIndex((positionIndex + 1) % positions.length);
  };

  const resetButtonPosition = () => {
    if (btnRef.current) {
      positions.forEach(pos => btnRef.current?.classList.remove(pos));
    }
  };

  const handleLogin = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      username,
      password,
    });

    const { user } = res.data;

     if (user.role === 'admin') {
      navigate('/admin');
    } else if (user.role === 'user') {
      navigate('/');
    } else {
      alert('Unknown role');
    }

  } catch (err: any) {
    alert(err.response?.data?.message || 'Login failed');
  }
};

  return (
    <div className="auth-wrapper">
      <h2>LEGEND LOGIN FORM</h2>
      <div className="auth-box">
        <div className="avatar"></div>
        <h3>LOGIN</h3>
        <p className="warning">Please fill the input fields before proceeding</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forget Password?</a>
        </div>
        <div className="btn-container">
          <button
            ref={btnRef}
            id="login-btn"
            disabled={isDisabled}
            className="shift-left"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <p className="signup">
  Don't have an Account? <a href="/register">Sign up</a>
</p>
      </div>
    </div>
  );
};

export default LoginForm;

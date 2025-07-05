import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Import this
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [waitlist, setWaitlist] = useState([]);

  const navigate = useNavigate(); // ← Place this inside the component

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/users', { withCredentials: true }).then(res => setUsers(res.data));
    axios.get('http://localhost:5000/api/admin/contacts', { withCredentials: true }).then(res => setContacts(res.data));
    axios.get('http://localhost:5000/api/admin/waitlist', { withCredentials: true }).then(res => setWaitlist(res.data));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <h2>Users</h2>
      <ul>{users.map(user => <li key={user._id}>{user.username}</li>)}</ul>

      <h2>Contacts</h2>
      <ul>{contacts.map(contact => <li key={contact._id}>{contact.email}</li>)}</ul>

      <h2>Waitlist</h2>
      <ul>{waitlist.map(w => <li key={w._id}>{w.email}</li>)}</ul>
    </div>
  );
};

export default AdminDashboard;

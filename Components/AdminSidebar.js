import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminSidebar.css"
const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add-category">Add Category</Link></li>
        <li><Link to="/add-movie">Add Movie</Link></li>
        <li><Link to="/showtime-management">Showtime Management</Link></li>
        <li><Link to="/booked-movies">Booked Movies</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminSidebar.css"
const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h2 className='sh1'>Admin Panel</h2>
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/add-category">Add Category</Link></li>
        <li><Link to="/admin/add-movie">Add Movie</Link></li>
        <li><Link to="/admin/showtime-management">Showtime Management</Link></li>
        <li><Link to="/admin/booked-movies">Booked Movies</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;

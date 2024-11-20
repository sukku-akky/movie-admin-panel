import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCategory from "./Components/AddCategory";
import AddMovie from "./Components/AddMovie";
import AdminSidebar from "./Components/AdminSidebar";
import BookedMovies from "./Components/BookedMovies";
import ShowtimeManagement from "./Components/ShowtimeManagement";



const AdminApp = () => {
  return (
    <Router>
      <div className="admin-app">
        <AdminSidebar />
        <div className="content">
          <Routes>
            <Route path="/admin/add-category" element={<AddCategory />} />
            <Route path="/admin/add-movie" element={<AddMovie />} />
            <Route
              path="admin/showtime-management"
              element={<ShowtimeManagement />}
            />
            <Route path="/admin/booked-movies" element={<BookedMovies />} />
            <Route path="/admin/booked-movies" element={<BookedMovies />} />
            <Route
              path="/admin"
              element={
                <h2>
                  Welcome to the Admin Panel. Select an option from the sidebar.
                </h2>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminApp;

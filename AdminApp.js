import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AddMoviePage from "./Pages/AddMoviePage";
import useFetchCategoriesWithMovies from "../custom-hooks/fetch-movies";
import AddCategoryPage from "./Pages/AddCategoryPage";
import BookedMovies from "./Components/BookedMovies";
import AddShowtimePage from "./Pages/AddShowtimePage";
import Mainpage from "./Pages/Mainpage";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "./Components/AdminSidebar";
const AdminApp = () => {
  const navigate = useNavigate();
  function stringToBoolean(value) {
    return value === "true";
  }
  const isAdminLoggedValue = useSelector((state) => state.movie.adminLogStatus);
  const isAdminLogged = stringToBoolean(isAdminLoggedValue);

  
  return (
    <>
      <div className="admin-app">
        <AdminSidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/add-category" element={<AddCategoryPage />} />
            <Route path="/add-movie" element={<AddMoviePage />} />
            <Route path="/showtime-management" element={<AddShowtimePage />} />
            <Route path="/booked-movies" element={<BookedMovies />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminApp;

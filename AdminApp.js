import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCategory from "./Components/AddCategory";
import AddMovie from "./Components/AddMovie";

import { fetchCategoriesWithMovies } from "../store/movie-actions";
import BookedMovies from "./Components/BookedMovies";
import ShowtimeManagement from "./Components/ShowtimeManagement";
import Mainpage from "./Pages/Mainpage";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./Components/AdminSidebar";
const AdminApp = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(fetchCategoriesWithMovies());
  },[dispatch])
  return (
   
      <div className="admin-app">
       <AdminSidebar/>
        <div className="content">
          <Routes>
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route
              path="/showtime-management"
              element={<ShowtimeManagement />}
            />
            <Route path="/booked-movies" element={<BookedMovies />} />
            
            <Route
              path="/"
              element={
                <Mainpage/>
              }
            />
          </Routes>
        </div>
      </div>
   
  );
};



export default AdminApp;




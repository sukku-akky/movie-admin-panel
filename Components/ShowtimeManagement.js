import React, { useState,useEffect } from "react";
import { collection, getDocs,query,where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addShowtimeToDatabase } from "../../store/movie-actions";
import "./ShowtimeManagement.css";
const ShowtimeManagement = () => {
  const [showtime, setShowtime] = useState({
    
    showDate: "",
    showTime: "",
  });
  const dispatch=useDispatch();
  const selectedCategory=useSelector(state=>state.movie.selectedCategory);
  const categoryId=useSelector(state=>state.movie.selectedCategoryId)
  const movieId=useSelector(state=>state.movie.selectedMovieId);

  // Fetch movies on component mount
  
  const handleSubmit = (e) => {
    e.preventDefault();
    

    const showDetails={...showtime,categoryId,movieId};
    dispatch(addShowtimeToDatabase(showDetails));
    setShowtime({  showDate: "", showTime: "" });
  };

  
  return (
    <div className="showtime-management">
      <h2>Showtime Management</h2>
      <form onSubmit={handleSubmit}>
      
        <input
          type="date"
          name="showDate"
          value={showtime.showDate}
          onChange={(e) =>
            setShowtime({ ...showtime, showDate: e.target.value })
          }
        />
        <input
          type="time"
          name="showTime"
          value={showtime.showTime}
          onChange={(e) =>
            setShowtime({ ...showtime, showTime: e.target.value })
          }
        />
        <button type="submit">Add Showtime</button>
      </form>
    </div>
  );
};

export default ShowtimeManagement;

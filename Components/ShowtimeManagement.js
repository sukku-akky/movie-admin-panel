import React,{useState} from "react";
import { addShowtimeToDatabase } from "../../store/movie-actions";
const ShowtimeManagement = () => {
    const [showtime,setShowtime]=useState({
        movieId:'',
        showDate:'',
        showTime:''
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        addShowtimeToDatabase(showtime);
        setShowtime({movieId:'',showDate:'',showTime:''});
    };

  return (
    <div>
    <h2>Showtime Management</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movieId"
        placeholder="Movie ID"
        value={showtime.movieId}
        onChange={(e) => setShowtime({ ...showtime, movieId: e.target.value })}
      />
      <input
        type="date"
        name="showDate"
        value={showtime.showDate}
        onChange={(e) => setShowtime({ ...showtime, showDate: e.target.value })}
      />
      <input
        type="time"
        name="showTime"
        value={showtime.showTime}
        onChange={(e) => setShowtime({ ...showtime, showTime: e.target.value })}
      />
      <button type="submit">Add Showtime</button>
    </form>
  </div>
  )
};

export default ShowtimeManagement;

import React,{useState,useEffect} from 'react'
import { getBookedMovies } from '../../store/movie-actions';
import "./BookedMovies.css";
import { useDispatch } from 'react-redux';
const BookedMovies = () => {
  const dispatch=useDispatch();
    const [bookedMovies,setBookedMovies]=useState([]);

    useEffect(()=>{
        const fetchBookedMovies=async()=>{
            const movies=await dispatch(getBookedMovies());
            setBookedMovies(movies);
        };
        fetchBookedMovies();

    },[]);

    const formatShowtime = (showtime) => {
      const dateObj = new Date(showtime);
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const year = dateObj.getFullYear();
      const hours = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');
      return `${day}/${month}/${year} at ${hours}:${minutes}`;
    };
  return (
    <div className='con'>
      <h2 className='head'>Booked Movies</h2>
      <table className='tb'>
        <thead className='thead'>
          <tr className='trb'>
            <th>User Name</th>
            <th>Email</th>
            <th>Movie Name</th>
            <th>Showtime</th>
          </tr>
        </thead>
        <tbody>
          {bookedMovies.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.userName}</td>
              <td>{booking.email}</td>
              <td>{booking.movieName}</td>
              <td>{formatShowtime(booking.showtime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookedMovies
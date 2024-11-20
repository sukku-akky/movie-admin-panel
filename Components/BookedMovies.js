import React,{useState,useEffect} from 'react'
import { getBookedMovies } from '../../store/movie-actions';
const BookedMovies = () => {
    const [bookedMovies,setBookedMovies]=useState([]);

    // useEffect(()=>{
    //     const fetchBookedMovies=async()=>{
    //         const movies=await getBookedMovies();
    //         setBookedMovies(movies);
    //     };
    //     fetchBookedMovies();

    // },[]);
  return (
    <div>
      <h2>Booked Movies</h2>
      <table>
        <thead>
          <tr>
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
              <td>{booking.userEmail}</td>
              <td>{booking.movieName}</td>
              <td>{booking.showtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookedMovies
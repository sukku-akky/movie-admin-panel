import React, { useState } from "react";
import "./AddMovie.css"
import { useNavigate } from "react-router-dom";
import { addMovieToDatabase } from "../../store/movie-actions";
import { useSelector, useDispatch } from "react-redux";
const AddMovie = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const selectedCategory=useSelector((state)=>state.movie.selectedCategory)
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    heroImage: "",
    moviePoster: "",
    description: "",
    director: "",
    genre: "",
    releaseDate: "",
    language: "",
    imdbRating: "",
    showtime: "",
    trailerLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieDetails({ ...movieDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!selectedCategory){
        alert("please select a category first");
        return;
    }

    const movieData={...movieDetails,category:selectedCategory};
    try {
      await dispatch(addMovieToDatabase(movieData));
      alert("Movie added successfully!");
      setMovieDetails({
        name: "",
        heroImage: "",
        moviePoster: "",
        description: "",
        director: "",
        genre: "",
        releaseDate: "",
        language: "",
        imdbRating: "",
        showtime: "",
        trailerLink: "",
      });
      navigate("/")
    } catch (error) {
      console.error("Error adding movie: ", error);
      alert("Failed to add movie.");
    }
  };

  return (
    <div className="add-movie">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie Name:</label>
          <input
            type="text"
            name="name"
            value={movieDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hero Section Image URL:</label>
          <input
            type="text"
            name="heroImage"
            value={movieDetails.heroImage}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Movie Poster URL:</label>
          <input
            type="text"
            name="moviePoster"
            value={movieDetails.moviePoster}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={movieDetails.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={movieDetails.director}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={movieDetails.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Release Date:</label>
          <input
            type="date"
            name="releaseDate"
            value={movieDetails.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={movieDetails.language}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>IMDB Rating:</label>
          <input
            type="number"
            name="imdbRating"
            step="0.1"
            min="0"
            max="10"
            value={movieDetails.imdbRating}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Showtime:</label>
          <input
            type="text"
            name="showtime"
            value={movieDetails.showtime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Trailer Link:</label>
          <input
            type="url"
            name="trailerLink"
            value={movieDetails.trailerLink}
            onChange={handleChange}
            required
          />
        </div>
        <div className="parent-bt">
        <button className="add-bt"type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;

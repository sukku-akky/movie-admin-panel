import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddCategory.css";

import { useNavigate } from "react-router-dom";
import { addCategoryToDatabase } from "../../store/movie-actions";
import { movieActions } from "../../store/redux-store";
const AddCategory = () => {
  const navigate=useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName) {
      alert("Please select a category.");
      return;
    }
    try {
      await dispatch(addCategoryToDatabase(categoryName));
      alert("Category added successfully!");
      dispatch(movieActions.setSelectedCategory(categoryName));
      navigate("/admin/add-movie");
    } catch (error) {
      console.error("Error adding category: ", error);
      alert("Failed to add category.");
    }
  };

  return (
    <>
  
    <div className="add-category">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <select
        className="cat-select"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        >
          <option value="" disabled>
            Select a Category
          </option>
          <option value="Now Playing">Now Playing</option>
          <option value="Top Movies in Theaters">Top Movies in Theaters</option>
          <option value="Top Rated">Top Rated</option>
          <option value="Hero Section">Hero Section</option>
        </select>
        <div >
        <button className="cat-bt"type="submit">Add Category</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddCategory;

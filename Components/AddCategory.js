import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategoryToDatabase } from "../../store/movie-actions";
const AddCategory = () => {
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
      setCategoryName("");
    } catch (error) {
      console.error("Error adding category: ", error);
      alert("Failed to add category.");
    }
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <select
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
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;

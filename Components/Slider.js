import React from "react";
import "./Slider.css";

const Slider = ({ categories, onCategorySelect }) => {
  return (
    <div className="slider">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect(category)}
          className="slider__button"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Slider;

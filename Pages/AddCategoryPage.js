import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AddCategory from "../Components/AddCategory";
import "./AddCategoryPage.css"
import React from 'react'

function AddCategoryPage() {
  return (
    <div className="contentadd">
    <Header/>
    <AddCategory/>
    <Footer/>
    </div>
  )
}

export default AddCategoryPage
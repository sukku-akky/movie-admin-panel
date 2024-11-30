import AddMovie from "../Components/AddMovie";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./AddMoviePage.css"
const AddMoviePage=()=>{
    return (
        <div className="contentm">
            <Header/>
            <AddMovie/>
            <Footer/>
        </div>
    )

}

export default AddMoviePage;
import ShowtimeManagement from "../Components/ShowtimeManagement";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./AddShowtimePage.css"
const AddShowtimePage=()=>{
    return (
        <div className="contents">
            <Header/>
            <ShowtimeManagement/>
            <Footer/>
        </div>
    )

}

export default AddShowtimePage;
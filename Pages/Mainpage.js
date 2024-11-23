import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Dashboard from "../Components/Dashboard";

import "./Mainpage.css";

const Mainpage = () => {
  return (
    <div className="main-content">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Mainpage;

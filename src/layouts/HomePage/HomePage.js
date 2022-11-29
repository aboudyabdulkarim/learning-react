import { Link } from "react-router-dom";
import FirstSection from "../../Components/firstSection/firstSection";
import SecondSection from "../../Components/secondSection/secondSection";
import "./homepage.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <FirstSection />
        <SecondSection />

        <Link to='/register'><button>To register</button></Link>
      </div>
    </>
  );
};

export default HomePage;

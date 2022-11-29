import "./firstsection.css";
import Brain from "../../assets/brainjpg.jpg";
const FirstSection = () => {
  return (
    <>
      <div className="first-section">
        <div className="fs-txt">
          <h1>This is my title</h1>
          <p>
            This element is being created for you to understand React to the
            deepest and you will try to read it all
          </p>
        </div>
        <div className="fs-img">
          <img src={Brain} alt="brain" />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
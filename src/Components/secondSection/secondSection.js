import "./secondSection.css";
import Bomb from "../../assets/bomb.png";
const SecondSection = () => {
  return (
    <>
      <div className="second-section">
        <div className="ss-img">
          <img src={Bomb} alt="bomb" />
        </div>
        <div className="ss-txt">
          <h2>This is second section</h2>
          <p>
            The next section will include some input with some props in which we
            have already worked on something like that before
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondSection;

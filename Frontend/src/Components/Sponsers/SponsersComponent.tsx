import "./Sponsers.css";
import ucscwie from "../../Assets/Sponsers/wie-ucsc.png";

const SponsersComponent = () => {
  return (
    <div className="sponserComponentCarousel">
      <div className="sponserComponent">
        <img src={ucscwie} alt="UCSCWIE Logo"></img>
      </div>
      <div className="sponserComponent">
        <img src={ucscwie} alt="UCSCWIE Logo"></img>
      </div>
      <div className="sponserComponent">
        <img src={ucscwie} alt="UCSCWIE Logo"></img>
      </div>
      <div className="sponserComponent">
        <img src={ucscwie} alt="UCSCWIE Logo"></img>
      </div>
      <div className="sponserComponent">
        <img src={ucscwie} alt="UCSCWIE Logo"></img>
      </div>
      <div className="sponserComponent">
        <img src={ucscwie} alt="UCSCWIE Logo"></img>
      </div>
    </div>
  );
};
export default SponsersComponent;

import "./Prizes.css";
import img1 from "../../Assets/Prizes/1.png";
import img2 from "../../Assets/Prizes/2.png";
import img3 from "../../Assets/Prizes/3.png";


const Prizes = () => {
  return (
    <div className="prizeDiv" id ={"prize"}>
      <div className="prizeHead" data-aos="fade-left" data-aos-duration="1000">
        <div className="shape">
        <h1 className="font-sfont font-semibold tracking-wider">
            <span>Awards for Winners</span>
          </h1>
        </div>
      </div>
      <div className="prizeRow">
        <div className="prizeColOne">
          <div className="prizeDetailsContainor">
            <h2 className="prizeTitle">2nd Place</h2>
            <h3 className="prizeText">Rs. 20,000</h3>
            <img src={img2} alt="2nd palce"></img>
          </div>
        </div>
        <div className="prizeColTwo">
          <div className="prizeDetailsContainor">
            <h2 className="prizeTitle" id="prizeTitle">
              1st Place
            </h2>
            <h3 className="prizeText" id="prizeText">
              Rs. 35,000
            </h3>
            <img src={img1} alt="1st place" ></img>
          </div>
        </div>
        <div className="prizeColThree">
          <div className="prizeDetailsContainor">
            <h2 className="prizeTitle">3rd Place</h2>
            <h3 className="prizeText">Rs. 15,000</h3>
            <img src={img3} alt="3rd place"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prizes;

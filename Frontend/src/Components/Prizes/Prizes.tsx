import React from "react";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div className="prizeDiv">
      <div className="prizeHead">
        <div
          className="shape"
        >
          <h1>
            <span>Awards for Winners</span>
          </h1>
        </div>
      </div>
      <div className="prizeRow">
        <div className="prizeColOne">
          <div className="prizeDetailsContainor">
            <h2 className="prizeTitle">2nd Place</h2>
            <h3 className="prizeText">Rs. 20,000</h3>
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
          </div>
        </div>
        <div className="prizeColThree">
          <div className="prizeDetailsContainor">
            <h2 className="prizeTitle">3rd Place</h2>
            <h3 className="prizeText">Rs. 15,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prizes;

import React from "react";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div className="prizeDiv">
      <h1 className="prizeHeading">Awards for Winners</h1>
      <div className="prizeRow">
        <div className="prizeColOne">
          <div className="prizeDetailsContainor">
            <h2 className="prizeTitle">1st Place</h2>
            <h3 className="prizeText">Rs. 50,000</h3>
          </div>
        </div>
        <div className="prizeColTwo">
          <div className="prizeDetailsContainor">
            <h2 className="prizeTitle">2nd Place</h2>
            <h3 className="prizeText">Rs. 30,000</h3>
          </div>
        </div>
        <div className="prizeColThree">
          <div className="prizeDetailsContainor">
            <h2 className="prizeTitle">3rd Place</h2>
            <h3 className="prizeText">Rs. 20,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prizes;

import SponsersComponent from "./SponsersComponent";
import "./Sponsers.css";

const Sponsers = () => {
  return (
    <div className="sponserDiv">
      <h1 className="sponserHeading">Sponsers for Competition</h1>
      <div className="sponserContainor">
        <SponsersComponent />
      </div>
    </div>
  );
};
export default Sponsers;

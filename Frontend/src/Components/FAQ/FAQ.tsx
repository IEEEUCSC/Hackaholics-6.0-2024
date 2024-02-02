import "./FAQ.css";
import FAQcomponent from "./FAQContainor";
import img from "../../Assets/Astronaut/astronut 5.png";
const FAQ = () => {
  return (
    <div className="faqDiv">
      {/* <h1 className="faqHeading">Frequently Asked Questions</h1> */}
      <div className="faqContainor">
        <div className="divFaqAndImage">
          <div
            className="faqImageContainor"
            data-aos="zoom-in-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={img}></img>
          </div>
          <FAQcomponent />
        </div>
      </div>
    </div>
  );
};
export default FAQ;

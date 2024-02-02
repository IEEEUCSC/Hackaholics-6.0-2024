import "./FAQ.css";
import FAQcomponent from "./FAQContainor";
import img from "../../Assets/Astronaut/astronut 5.png";
const FAQ = () => {
  return (
    <div className="faqDiv">
      <div className="FAQHead">
        <div
          className="shape"
          data-aos="zoom-in-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>
            <span>Frequently Asked Questions</span>
          </h1>
        </div>
      </div>
      <div className="faqContainor">
        <div className="divFaqAndImage">
          <div
            className="faqImageContainor"
          >
            <img src={img} alt="FAQ add"></img>
          </div>
          <FAQcomponent />
        </div>
      </div>
    </div>
  );
};
export default FAQ;

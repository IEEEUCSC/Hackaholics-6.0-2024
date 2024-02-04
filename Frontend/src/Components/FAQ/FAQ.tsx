import "./FAQ.css";
import FAQcomponent from "./FAQContainor";
import img from "../../Assets/Astronaut/astronut 8.png";
const FAQ = () => {
  return (
    <div className="faqDiv bg-secondary" id="faq">
      <div className="FAQHead">
        <div
          className="shape"
        >
          <h1 className="font-sfont font-semibold tracking-wider">
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

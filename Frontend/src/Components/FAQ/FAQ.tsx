import "./FAQ.css";
import FAQcomponent from "./FAQContainor";

const FAQ = () => {
  return (
    <div className="faqDiv">
      <h1 className="faqHeading">Frequently Asked Questions</h1>
      <div className="faqContainor">
            <FAQcomponent />
      </div>
    </div>
  );
};
export default FAQ;

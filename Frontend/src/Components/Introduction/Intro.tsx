import "./intro.scss";
// import Image from "../../Assets/Introduction/wie-ucsc.png";
import Image from "../../Assets/Astronaut/astronut 1.png";

export default function Intro() {
  return (
    <div className="Intro">
      <div className="IntroHead">
        <div
          className="shape"
          data-aos="zoom-in-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>
            <span>What is Hackaholics 6.0 ?</span>
          </h1>
        </div>
      </div>
      <div className="introDetailsAndImageOne">
        <div className="text">
          <p>
            Embark on a Journey of Empowerment and Innovation: Introducing
            Hackaholics 6.0, the Premier Girls-Only Hackathon. A Confluence of
            Brilliant Minds, this Event is a Platform for Women in Tech to
            Showcase Their Skills, Ignite Creativity, and Forge Lasting
            Connections.
          </p>
        </div>
        <div className="Image">
          <img
            src={Image}
            alt="Hackaholics 6.0 Introduction"
            className="test"
          />
        </div>
      </div>
      <div className="introDetailsAndImageTwo">
        <div className="Image">
          <img
            src={Image}
            alt="Hackaholics 6.0 Introduction"
            className="test"
          />
        </div>
        <div className="text">
          <p>
            Embark on a Journey of Empowerment and Innovation: Introducing
            Hackaholics 6.0, the Premier Girls-Only Hackathon. A Confluence of
            Brilliant Minds, this Event is a Platform for Women in Tech to
            Showcase Their Skills, Ignite Creativity, and Forge Lasting
            Connections.
          </p>
        </div>
      </div>
    </div>
  );
}

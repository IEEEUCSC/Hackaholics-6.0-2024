import "./intro.scss";
import Image from "../../Assets/Introduction/wie-ucsc.png";

export default function Intro() {
  return (
    <div className="Intro">
      <div className="IntroHead">
        <div className="shape">
          <h1>
            <span>WHAT IS HACKAHOLICS 6.0?</span>
          </h1>
        </div>
      </div>
      <div className="text">
        <p>
          Embark on a Journey of Empowerment and Innovation: Introducing
          Hackaholics 6.0, the Premier Girls-Only Hackathon. A Confluence of
          Brilliant Minds, this Event is a Platform for Women in Tech to
          Showcase Their Skills, Ignite Creativity, and Forge Lasting
          Connections. Join us in Fostering an Inclusive Space Where Ideas
          Flourish, Innovation Prevails, and Women Lead the Way into the Future
          of Technology. Together, Let's Shape the Next Frontier of Tech
          Excellence
        </p>
      </div>
      <div className="Image">
        <img src={Image} alt="Hackaholics 6.0 Introduction" className="test" />
      </div>
    </div>
  );
}

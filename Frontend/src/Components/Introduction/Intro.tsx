import "./intro.scss";
// import Image from "../../Assets/Introduction/wie-ucsc.png";
import Image from "../../Assets/Astronaut/astronut 1.png";
import Image2 from "../../Assets/Astronaut/astronut 5.png";

export default function Intro() {
  return (
    <div className="Intro">
      <div className="IntroHead">
        <div
          className="shape"
        >
          <h1>
            <span>What is Hackaholics 6.0 ?</span>
          </h1>
        </div>
      </div>
      <div className="introDetailsAndImageOne">
        <div className="text">
          <p>
            <b>Hackaholics 6.0</b> is an{" "}
            <b>Inter-University Girls’ Only Hackathon</b>
            organized by the{" "}
            <b>IEEE WIE Student Branch Affinity Group of UCSC</b>, held for the
            sixth consecutive year. This <b>ideathon</b> empowers female
            undergraduates to discuss and develop solutions to critical issues
            in our society through cooperation, collaboration, and coordination.
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
            src={Image2}
            alt="Hackaholics 6.0 Introduction"
            className="test"
          />
        </div>
        <div className="text">
          <p>
            The event commences with a <b>virtual scholarship awareness session</b> for
            undergraduates, followed by a <b>proposal submission phase</b> for <b>teams of
            three students</b> from the <b>same university</b>, focusing on innovative
            ideas within given topics. The <b>top 10 teams</b> are advancing to the
            next round where they prepare <b>UI prototypes</b> and <b>presentations</b>. The
            <b> physical competition on March 2nd, 2024</b>, involves <b>presenting
            proposed ideas</b>, with the top five teams selected based on various
            criteria. These <b>finalists</b> then tackle a <b>scenario challenge</b> presented
            by judges, and <b>winners</b> are determined by industry experts, receiving
            <b> cash prizes</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

import "./intro.scss";
// import Image from "../../Assets/Introduction/wie-ucsc.png";
import Image from "../../Assets/Astronaut/astronut 1.png";
import Image2 from "../../Assets/Astronaut/astronut 5.png";

export default function Intro() {
  return (
    <div className="Intro bg-secondary" id={"intro"}>
      <div className="IntroHead">
        <div className="shape" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="font-sfont font-semibold tracking-wider">
            <span>What is Hackaholics 6.0 ?</span>
          </h1>
        </div>
      </div>
      <div className="introDetailsAndImageOne ">
        <div className="text">
          <p
            className="text-neutral-50 tracking-wider landing-2 font-pfont font-thin"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Hackaholics 6.0 is an Inter-University Girls’ Only Hackathon
            organized by the IEEE WIE Student Branch Affinity Group of UCSC,
            held for the sixth consecutive year. This ideathon empowers female
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
          <p
            className="text-neutral-50 tracking-wider landing-2 font-pfont font-thin z-40"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            The event commences with a virtual scholarship awareness session for
            undergraduates, followed by a proposal submission phase for teams of
            three students from the same university, focusing on innovative
            ideas within given topics. The top 10 teams are advancing to the
            next round where they prepare UI prototypes and presentations. The
            physical competition involves presenting proposed ideas, with the top five teams selected based on various
            criteria. These finalists then tackle a scenario challenge presented
            by judges, and winners are determined by industry experts, receiving
            cash prizes.
          </p>
        </div>
      </div>
    </div>
  );
}

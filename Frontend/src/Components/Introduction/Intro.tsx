import "./intro.scss";
// import Image from "../../Assets/Introduction/wie-ucsc.png";
import Image from "../../Assets/Astronaut/astronut 1.png";
import Image2 from "../../Assets/Astronaut/astronut 5.png";

export default function Intro() {
  return (
    <div className="Intro bg-secondary" id={"intro"}>
      <div className="IntroHead">
        <div
          className="shape"
        >
          <h1 className="font-sfont font-semibold tracking-wider">
            <span>What is Hackaholics 6.0 ?</span>
          </h1>
        </div>
      </div>
      <div className="introDetailsAndImageOne ">
        <div className="text">
          <p className="text-neutral-50 tracking-wider landing-2 font-pfont font-thin">
            <b className="tracking-widest text-white">Hackaholics 6.0</b> is an{" "}
            <b className="tracking-wider text-white">Inter-University Girls’ Only Hackathon </b>
            organized by the{" "}
            <b className="tracking-widest text-white">IEEE WIE Student Branch Affinity Group of UCSC</b>, held for the
            sixth consecutive year. This <b className="tracking-widest text-white">ideathon</b> empowers female
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
        <p className="text-neutral-50 tracking-wider landing-2 font-pfont font-thin z-40">
            The event commences with a <b className="tracking-widest text-white">virtual scholarship awareness session</b> for
            undergraduates, followed by a <b className="tracking-widest text-white">proposal submission phase</b> for <b>teams of
            three students</b> from the <b className="tracking-widest text-white">same university</b>, focusing on innovative
            ideas within given topics. The <b className="tracking-widest text-white">top 10 teams</b> are advancing to the
            next round where they prepare <b className="tracking-widest text-white">UI prototypes</b> and <b className="tracking-widest text-white">presentations</b>. The
            <b className="tracking-widest text-white"> physical competition on March 2nd, 2024</b>, involves <b className="tracking-widest text-white">presenting
            proposed ideas</b>, with the top five teams selected based on various
            criteria. These <b className="tracking-widest text-white">finalists</b> then tackle a <b className="tracking-widest text-white">scenario challenge</b> presented
            by judges, and <b className="tracking-widest text-white">winners</b> are determined by industry experts, receiving
            <b className="tracking-widest text-white"> cash prizes</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

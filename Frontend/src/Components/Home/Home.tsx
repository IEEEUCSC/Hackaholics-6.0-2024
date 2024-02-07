//@ts-ignore
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./Home.css";
import Countd from "../Timer/Time";
import { HashLink } from "react-router-hash-link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.main
      className="relative flex flex-col h-screen w-screen min-w-screen items-center justify-center text-slate-50 font-bold bg-secondary "
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="homeComponent"
    >
      <motion.div variants={textVariants}>
        <div className="text-white font-sfont text-xl md:text-2xl md:tracking-widest tracking-wide text-center hover:text-orange-100 mt-44">
          <p>IEEE WIE STUDENT BRANCH</p>
          <p>AFFINITY GROUP OF UCSC</p>
        </div>
      </motion.div>

      <motion.div variants={textVariants}>
        <div className="mt-8 md:mt-5">
          <h1
            className="text-white tracking-widest text-4xl md:text-8xl landing-8 font-pfont"
            id="hackaholicsHeading"
          >
            HACKAHOLICS
          </h1>
        </div>
      </motion.div>

      <motion.div variants={textVariants}>
        <div className="mt-5 md:mt-3 ">
          <h1 className="text-white tracking-wide text-sm md:text-lg lg:text-2xl font-sfont text-center">
            Inter-University Girls’ Only Hackathon
          </h1>
        </div>
      </motion.div>

      <motion.div
        variants={buttonVariants}
        className="flex flex-row md:flex-row justify-center items-center space-x-5"
      >
        <div className="mt-10 md:mt-1 lg:mt-10 md:mr-4">
          <div className="">
            <a
              href="https://drive.google.com/file/d/1aMsU3lKo7J8cgbkKQpbs1GwqPJA8Ynag/view?usp=sharing"
              target="_blank"
              className="relative items-center justify-start inline-block p-6 px-6 py-3 overflow-hidden font-medium rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg- opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-purple-200 opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white-100 transition-colors duration-200 ease-in-out group-hover:text-secondary tracking-wider">
                Delegate Book
              </span>
              <span className="absolute inset-0 border-2 border-purple-100 rounded-full hover:font-bold tracking-wide"></span>
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-1 lg:mt-10 md:mr-4">
          <div className="">
            <HashLink
              smooth
              to="/team"
              className="relative items-center justify-start inline-block p-6 px-6 py-3 overflow-hidden font-medium rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg- opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-purple-200 opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white-100 transition-colors duration-200 ease-in-out group-hover:text-secondary tracking-wider">
                Register Now
              </span>
              <span className="absolute inset-0 border-2 border-purple-100 rounded-full hover:font-bold tracking-wide"></span>
            </HashLink>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-row md:mt-10">Team Registration ends in</div>
      <Countd targetDate={new Date("2024-02-16T00:00:00")} />
    </motion.main>
  );
};

export default Home;

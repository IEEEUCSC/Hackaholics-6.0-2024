//@ts-ignore
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

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
            className="flex flex-col h-screen items-center justify-center text-slate-50 bg-secondary"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <motion.div variants={textVariants}>
                <div className="text-white font-sfont text-lg md:text-xl lg:text-2xl tracking-wide text-center hover:text-orange-100">
                    <p>IEEE WIE STUDENT BRANCH</p>
                    <p>AFFINITY GROUP OF UCSC</p>
                </div>
            </motion.div>

            <motion.div variants={textVariants}>
                <div className="mt-3 md:mt-5 lg:mt-10">
                    <h1 className="text-white tracking-widestone text-3xl md:text-5xl lg:text-8xl font-pfont">
                        HACKAHOLICS
                    </h1>
                </div>
            </motion.div>

            <motion.div variants={textVariants}>
                <div className="mt-2 md:mt-3 lg:mt-4">
                    <h1 className="text-tertiary tracking-wide text-sm md:text-lg lg:text-2xl font-sfont text-center">
                        For the girls with innovative ideas
                    </h1>
                </div>
            </motion.div>

            <motion.div variants={buttonVariants} className="flex flex-col md:flex-row justify-center items-center">
                <div className="mt-3 md:mt-1 lg:mt-10 md:mr-4">
                    <div className="hover:text-primary text-secondary font-bold">
                        <a
                            href="#_"
                            className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-secondary rounded-full hover:bg-purple-100 group"
                        >
                            <span className="absolute inset-0 border-2 group-hover:border-[25px] ease-linear duration-100 transition-all border-purple-100 rounded-full hove:rbg-purple-200"></span>
                            <span className="relative w-full text-left text-orange-100 transition-colors duration-200 ease-in-out group-hover:text-secondary font-bold tracking-wide">
                                Delegate Booklet
                            </span>
                        </a>
                    </div>
                </div>

                <div className="mt-3 md:mt-1 lg:mt-10 md:mr-4">
                    <div className="hover:text-primary text-secondary font-bold">
                        <a
                            href="https://github.com/IEEEUCSC"
                            className="relative items-center justify-start inline-block p-6 px-6 py-3 overflow-hidden font-medium rounded-full group"
                        >
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg- opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-purple-200 opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-orange-100 transition-colors duration-200 ease-in-out group-hover:text-secondary tracking-wide font-bold">
                                Register Now
                            </span>
                            <span className="absolute inset-0 border-2 border-purple-100 rounded-full hover:font-bold tracking-wide"></span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.main>
    );
};

export default Home;

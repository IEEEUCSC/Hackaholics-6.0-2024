import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: 2, // Adjust the duration as needed
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Home = () => {
    const controls = useAnimation();

    useEffect(() => {
        // Start the animation when the component has mounted
        controls.start('visible');
    }, [controls]);

    return (
        <motion.main
            className='flex flex-col h-screen items-center content-center justify-center text-slate-50 bg-secondary'
            initial='hidden'
            animate={controls}
            variants={containerVariants}>


            <motion.div variants={itemVariants}>
                <div className="text-white font-sfont text-2xl tracking-wide text-center">
                    <p>
                        IEEE WIE STUDENT BRANCH
                    </p>
                    <p>
                        AFFINITY GROUP OF UCSC
                    </p>
                </div>
            </motion.div>
            <motion.div variants={itemVariants}>
                <div className="mt-10">
                    <h1 className="text-white tracking-widestone text-8xl font-pfont">
                        HACKAHOLICS
                    </h1>
                </div>
            </motion.div>
            <motion.div variants={itemVariants}>
                <div className="mt-4">
                    <h1 className="text-tertiary tracking-wide text-3xl font-sfont text-center">
                        For the girls with innovative ideas
                    </h1>
                </div>
            </motion.div>
            <motion.div variants={itemVariants}>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-row gap-x-6">
                        <motion.div variants={itemVariants}>
                            <div className="mt-10">
                                <a href="https://github.com/IEEEUCSC" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg- opacity-[3%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-purple-200 opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="relative w-full text-left text-orange-100 transition-colors duration-200 ease-in-out group-hover:text-secondary">Delegate Book</span>
                                    <span className="absolute inset-0 border-2 border-orange-100 rounded-full"></span>
                                </a>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <div className="hover:text-primary text-secondary font-bold mt-10">
                                <a href="https://github.com/IEEEUCSC" className="relative inline-flex items-center justify-inline-block p-6 px-6 py-3 overflow-hidden font-medium text-white rounded-full shadow-2xl group border">
                                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-violet-500 rounded-full blur-md ease"></span>
                                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-secondary rounded-full blur-md"></span>
                                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-secondary rounded-full blur-md"></span>
                                    </span>
                                    <span className="relative text-black font-bold">Register Now</span>
                                </a>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>


        </motion.main >
    );
};

export default Home;

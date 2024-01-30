import React, { useState } from "react";
import logo from "../../Assets/NavBar/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 w-full bg-secondary z-10 gap-12">
            <div className="flex flex-col md:flex-row justify-between items-right ml-0 md:ml-2 mr-2 md:mr-0 mb-0 px-2 md:px-9 py-5">
                <a href="https://github.com/IEEEUCSC">
                    <img className="inline-block h-10 ml-0 mt-2 md:mr-20" src={logo} alt="wie-logo" />
                </a>

                <div className="md:hidden ">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? "Close" : "Menu"}
                    </button>
                </div>

                <div className={`md:flex flex-col md:flex-row md:space-y-0 space-y-2 text-xl ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="https://github.com/IEEEUCSC" className="group relative mr-9">
                        <div className="py-2 px-3 indigo-950 text-white hover:text-purple-300 ">
                            Home
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 active:bg-indigo-600 active:text-white"></div>
                        </div>
                    </a>

                    <a href="https://github.com/IEEEUCSC" className="group relative mr-9">
                        <div className="py-2 px-3 indigo-950 text-white hover:text-purple-300 active:bg-indigo-600 active:text-white">
                            Time Line
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 active:bg-indigo-600 active:text-white"></div>
                        </div>
                    </a>

                    <a href="https://github.com/IEEEUCSC" className="group relative mr-9">
                        <div className="py-2 px-3 indigo-950 text-white hover:text-purple-300">
                            Prize
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 active:bg-indigo-600 active:text-white"></div>
                        </div>
                    </a>

                    <a href="https://github.com/IEEEUCSC" className="group relative mr-9">
                        <div className="py-2 px-3 indigo-950 text-white hover:text-purple-300">
                            Contact Us
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 active:bg-indigo-600 active:text-white"></div>
                        </div>
                    </a>

                    {/* <a href="https://github.com/IEEEUCSC" className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-secondary px-5 py-2 text-lg font-medium text-white hover:text-blue-200 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                        Register Now
                    </a> */}
                    <a href="#_" className="relative rounded px-3 py-2 overflow-hidden group bg-secondary relative hover:bg-gradient-to-r hover:from-violet-700 hover:to-purple-900 text-white hover:ring-1 hover:ring-offset-1 hover:ring-white transition-all ease-out duration-500">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-tertiary opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Register Now</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

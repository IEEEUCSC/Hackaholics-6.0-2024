import React from "react";
import logo from "../../Assets/NavBar/logo.png";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full bg-secondary z-10">
            <div className="flex justify-between items-right ml-0 md:ml-2 mr-10 md:mr-0 mb-0 px-9 py-5">
                <a href="https://github.com/IEEEUCSC">
                    <img className="inline-block h-10 ml-0 mt-2 mr-20" src={logo} alt="wie-logo" />
                </a>

                <div className="flex space-x-7 text-xl ml-56">


                    <a href="https://github.com/IEEEUCSC">

                        <div className="relative group">
                            <div className="py-2 px-3 indigo-950 text-white hover:text-purple-300">
                                Home
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100  active:bg-indigo-600 active:text-white"></div>
                            </div>
                        </div>



                    </a>

                    <a href="https://github.com/IEEEUCSC">

                        <div className="relative group">
                            <div className="py-2 px-3 indigo-950 text-white hover:text-purple-300 active:bg-indigo-600 active:text-white">
                                Time Line
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100  active:bg-indigo-600 active:text-white"></div>
                            </div>
                        </div>


                    </a>

                    <a href="https://github.com/IEEEUCSC">

                        <div className="relative group">
                            <div className="py-2 px-3 indigo-950 text-white hover:text-purple-300">
                                Prize
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100  active:bg-indigo-600 active:text-white"></div>
                            </div>
                        </div>

                    </a>

                    <a href="https://github.com/IEEEUCSC">

                        <div className="relative group">
                            <div className="py-2 px-3 indigo-950 text-white hover:text-purple-300">
                                Contact Us
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100  active:bg-indigo-600 active:text-white"></div>
                            </div>
                        </div>
                    </a>


                    <a href="https://github.com/IEEEUCSC" className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-secondary  px-5 py-2 text-lg font-medium text-white hover:text-blue-200 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
                        Register Now
                    </a>
                    {/* <a href="https://github.com/IEEEUCSC">

                    <div className="py-2 px-2 text-white  hover:bg-white ring ring-white hover:ring-blue-200 hover:text-primary rounded-2xl transition duration-300">
                        Register Now
                    </div> 

                </a>  */}

                </div>
                <div>
                </div>
            </div>
            </div>
            );
};

            export default Navbar;

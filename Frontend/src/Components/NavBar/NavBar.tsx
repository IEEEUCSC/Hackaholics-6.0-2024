import React, { useState } from "react";
import logo from "../../Assets/NavBar/logo.png";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import mobileLogo from "../../Assets/NavBar/as-lpgp.png";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed top-0 w-screen bg-secondary z-10 ${isOpen ? "h-screen overflow-hidden" : ""
                }`}
        >
            <div className="flex flex-col md:flex-row justify-between items-right ml-0 md:ml-1 mr-1 md:mr-0 mb-0 px-2 md:px-9 py-3 md:py-5 place-items-start place-item">
                <div className="flex items-center">
                    <a href="https://github.com/IEEEUCSC" className="block md:hidden">
                        <img
                            className="relative inline-block h-20 ml-auto -mt-2"
                            src={mobileLogo}
                            alt="mobile-logo"
                        />
                    </a>

                    <a href="https://github.com/IEEEUCSC" className="hidden md:block">
                        <img
                            className="inline-block h-10 ml-0 mt-2 md:mr-20"
                            src={logo}
                            alt="wie-logo"
                        />
                    </a>

                    <div className="md:hidden flex justify-end items-center">
                        <IconButton
                            onClick={toggleMenu}
                            color="inherit"
                            sx={{ color: isOpen ? "gray" : "white" }}
                        >
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </div>
                </div>
                <div
                    className={`md:flex flex-col md:flex-row md:space-y-0 space-y-2 text-xl bg-opacity-10 whitespace-nowrap ${isOpen ? "block bg-green-500" : "hidden"
                        }`}
                >
                    {[
                        { label: "Home", link: "https://github.com/IEEEUCSC" },
                        { label: "Time Line", link: "https://github.com/IEEEUCSC" },
                        { label: "Prize", link: "https://github.com/IEEEUCSC" },
                        { label: "Contact Us", link: "https://github.com/IEEEUCSC" },
                    ].map((item, index) => (
                        <a key={index} href={item.link} className="group relative md:mr-9">
                            <div className="py-3 md:py-2 px-3 indigo-950 text-white hover:text-purple-300 active:bg-indigo-600 active:text-white text-center">
                                {item.label}
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 active:bg-indigo-600 active:text-white"></div>
                            </div>
                        </a>
                    ))}

                    <a
                        href="#_"
                        className="relative rounded px-6 py-2 overflow-hidden group bg-secondary hover:bg-gradient-to-r hover:from-violet-700 hover:to-purple-900 text-white hover:ring-1 hover:ring-offset-1 hover:ring-white transition-all ease-out duration-500 md:align-middle md:items-center mx-auto"
                    >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-tertiary opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative text-center">Register Now</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

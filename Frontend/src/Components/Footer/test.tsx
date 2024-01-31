import React from 'react';
import ucscwie from '../../Assets/Footer/wie-ucsc.png';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto sm-auto px-6 py-5 space-x-1">
        <div className="flex flex-col mt-1">

          {/* First Row */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              <img className="inline-block h-60 w-50 mt-1 ml-0.5 mr-0.5 rounded-full" src={ucscwie} alt="wie-logo" id='footerLogo'/>
            </div>
          </div>

          {/* Second Row - Text Links */}
          <div className="flex flex-row md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 space-x-20 mb-4 md:mb-10 delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="400">
          <div className='box-borderbox-content w-20 md:w-auto pr-0 md:pr-10'>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-100 capitalize hover:uppercase">Website</div>
              </a>
            </div>
            <div className='box-borderbox-content w-full md:w-auto pr-5 md:pr-10'>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-100 capitalize hover:uppercase">LinkedIn</div>
              </a>
            </div>
            <div className='box-borderbox-content w-full md:w-auto pr-5 md:pr-10'>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-100 capitalize hover:uppercase">Instagram</div>
              </a>
            </div>
            <div className='box-borderbox-content w-20 md:w-10 pr-5 md:pr-10'>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-110 capitalize hover:uppercase">FaceBook</div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Updated spacing for mobile */}
        <p className="text-xm text-primary mt-2 md:mt-2 hover:text-red-100 text-center">
          © {new Date().getFullYear()} IEEE- UCSC All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

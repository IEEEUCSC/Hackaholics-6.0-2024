import React from 'react';
import ucscwie from '../../Assets/Footer/wie-ucsc.png';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto sm-auto px-4 md:px-6 py-5 space-y-4">
        <div className="flex flex-col items-center justify-center">

          {/* First Row */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center mx-auto mr-6"> {/* Center the image */}
              <img className="inline-block h-16 md:h-40 w-auto mt-1 ml-0.5 mr-0.5 rounded-full" src={ucscwie} alt="wie-logo" id='footerLogo'/>
            </div>
          </div>

          {/* Second Row - Text Links */}
          <div className="flex flex-col space-y-4 text-center">
            <div className='w-full pr-0 md:pr-10'>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-sm md:text-xl hover:text-violet-400 text-white transition-transform transform hover:scale-110 capitalize hover:uppercase">Official WebSite</div>
              </a>
            </div>
            <div className='w-full pr-0 md:pr-10'>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-sm md:text-xl hover:text-violet-400 text-white transition-transform transform hover:scale-110 capitalize hover:uppercase">LinkedIn</div>
              </a>
            </div>
            <div className='w-full pr-0 md:pr-10'>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-sm md:text-xl hover:text-violet-400 text-white transition-transform transform hover:scale-110 capitalize hover:uppercase">Instagram</div>
              </a>
            </div>
            <div className='w-full pr-0 md:pr-10'>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-sm md:text-xl hover:text-violet-400 mb-4 text-white transition-transform transform hover:scale-110 capitalize hover:uppercase">FaceBook</div>
              </a>
            </div>
          </div>
        </div>

        {/* Updated spacing for mobile */}
        <p className="text-xs md:text-sm text-primary mt-12 md:mt-4 mr-7 hover:text-red-100 text-center">
          © {new Date().getFullYear()} IEEE- UCSC All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

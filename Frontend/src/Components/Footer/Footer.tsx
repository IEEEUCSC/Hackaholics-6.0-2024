import React from 'react';
// import ieeewiee from '../../Assets/Footer/ieee-wie.png';
import ucscwie from '../../Assets/Footer/wie-ucsc.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto sm-auto px-6 py-12 space-x-1">
        <div className="flex flex-col mt-1">
{/* First Row */}
          <div className="flex justify-center gap-2">
            {/* <div className="flex items-center justify-center">
              <img className="inline-block h-60 w-50 mt-1 ml-0.5 mr-0.5 rounded-full" src={ieeewiee} alt="wie-logo" />
            </div> */}
            <div className="flex items-center justify-center">
              <img className="inline-block h-60 w-50 mt-1 ml-0.5 mr-0.5 rounded-full" src={ucscwie} alt="wie-logo" />
            </div>
          </div>

{/* Second Row - Text Links */}
          <div className="flex flex-row justify-center my-4 space-x-12">
            <div>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-110 capitalize hover:uppercase">Official WebSite</div>
              </a>
            </div>
            <div>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-110 capitalize hover:uppercase">LinkedIn</div>
              </a>
            </div>
            <div>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-110 capitalize hover:uppercase">Instagram</div>
              </a>
            </div>
            <div>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl text-slate-300 hover:text-indigo-300 text-white text-center capitalize hover:uppercase">FaceBook</div>
              </a>
            </div>
          </div>
        </div>
        <p className="text-xm text-primary mt-5 hover:text-red-100 text-center">
          © {new Date().getFullYear()} IEEE- UCSC All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

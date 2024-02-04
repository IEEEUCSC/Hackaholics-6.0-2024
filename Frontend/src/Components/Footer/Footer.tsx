import ucscwie from '../../Assets/Footer/wie-ucsc.png';
import ieeewiee from '../../Assets/Footer/ieee-wie.png';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white bg-opacity-100">
      <div className="container mx-auto sm-auto px-6 py-12 space-x-1" id={"footer"}>
        <div className="flex flex-col mt-1">
{/* First Row */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              <img className="inline-block h-60 w-50 mt-1 ml-0.5 mr-0.5 rounded-full" src={ieeewiee} alt="wie-logo" />
            </div>
            <div className="flex items-center justify-center" id='footerLogoDiv'>
              <img className="inline-block h-60 w-50 mt-1 ml-0.5 mr-0.5 rounded-full" src={ucscwie} alt="wie-logo" />
            </div>
          </div>

{/* Second Row - Text Links */}
          <div className="flex flex-row justify-center my-4 space-x-12" id='footerLinks'>
            <div>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize " id='footerLink'>Official WebSite</div>
              </a>
            </div>
            <div>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize "id='footerLink'>LinkedIn</div>
              </a>
            </div>
            <div>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize "id='footerLink'>Instagram</div>
              </a>
            </div>
            <div>
              <a href="https://github.com/IEEEUCSC">
                <div className="text-xl hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize "id='footerLink'>FaceBook</div>
              </a>
            </div>
          </div>
        </div>
        <p className="text-xm text-cyan-950 mt-5 hover:text-tertiary text-center" id='footerRights'>
          © {new Date().getFullYear()} IEEE- UCSC All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

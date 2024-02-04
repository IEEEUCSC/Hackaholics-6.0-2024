import ucscwie from '../../Assets/Footer/wie-ucsc.png';
import ieeewiee from '../../Assets/Footer/ieee-wie.png';
import ucscwie2 from '../../Assets/Footer/wie-ucsc2.png';
import ieeewiee2 from '../../Assets/Footer/ieee-wie2.png';
import logo from '../../Assets/NavBar/logo.png'


const Footer = () => {
  return (
    <main className='flex flex-col py-12 items-center content-center justify-center'>
      <div>
        {/* Logos */}
        <div className='flex flex-row justify-center gap-32 mb-16'>
          {/* First Image */}
          <div>
            <img className="inline-block w-32 mt-1 ml-0.5 mr-0.5" src={ieeewiee2} alt="wie-logo" />
          </div>
          {/* Second Image - Hackaholics Logo */}

          {/* <div>
            <img className="inline-block w-80 mt-10 ml-0.5 mr-0.5" src={logo} alt="wie-logo" />
          </div> */}

          {/* Third Image */}
          <div>
            <img className="inline-block w-32 mt-1 ml-0.5 mr-0.5" src={ucscwie2} alt="wie-logo" />
          </div>

        </div>

        {/* Socila Links */}
        <div className='flex flex-row justify-center gap-14 text-white font-pfont tracking-widest text-2xl'>
          <div className=''>
            <a href="https://github.com/IEEEUCSC">
              <div className="text-1xl p-1 hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize " id='footerLink'>WebSite</div>
            </a>
          </div>
          <div>
            <a href="https://github.com/IEEEUCSC">
              <div className="text-2xl p-1 hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize " id='footerLink'>LinkedIn</div>
            </a>
          </div>
          <div>
            <a href="https://github.com/IEEEUCSC">
              <div className="text-2xl p-1 hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize " id='footerLink'>Instagram</div>
            </a>
          </div>
          <div>
            <a href="https://github.com/IEEEUCSC">
              <div className="text-2xl p-1 hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize " id='footerLink'>FaceBook</div>
            </a>
          </div>



        </div>

        {/* Copy right Part */}
        <div>
          <p className="text-xm font-pfont text-tertiary mt-14 hover:text-white text-center">
            © {new Date().getFullYear()} IEEE - UCSC All Rights Reserved.
          </p>

        </div>



      </div>
    </main>

  );
};

export default Footer;

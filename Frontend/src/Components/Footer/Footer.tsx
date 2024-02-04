// import ucscwie from '../../Assets/Footer/wie-ucsc.png';
// import ieeewiee from '../../Assets/Footer/ieee-wie.png';
import ucscwie2 from '../../Assets/Footer/wie-ucsc2.png';
import ieeewiee2 from '../../Assets/Footer/ieee-wie2.png';
// import logo from '../../Assets/NavBar/logo.png'


const Footer = () => {
  return (
    <main className='flex flex-row md:flex-col py-5 md:py-12 items-center content-center justify-center bg-gradient-to-b from-secondary to-black'>
      <div>
        {/* Logos */}
        <div className='flex flex-row mt-3 space-x-14 md:flex-row items-center mb-6 md:justify-center md:gap-32 md:mb-16'>
          {/* First Image */}
          <div>
            <img className="inline-block w-28 mb-2 md:w-32 md:mt-1 md:ml-0.5 md:mr-0.5" src={ieeewiee2} alt="wie-logo" />
          </div>
          {/* Second Image - Hackaholics Logo */}

          {/* <div>
            <img className="inline-block md:w-80 md:mt-10 md:ml-0.5 md:mr-0.5" src={logo} alt="wie-logo" />
          </div> */}

          {/* Third Image */}
          <div>
            <img className="inline-block w-24 md:w-32 md:mt-1 md:ml-0.5 md:mr-0.5" src={ucscwie2} alt="wie-logo" />
          </div>

        </div>

        {/* Socila Links */}
        <div className='flex flex-col gap-y-2 mb-5 md:flex-row md:justify-center md:gap-14 text-white font-pfont tracking-widest md:text-2xl'>
          <div className=''>
            <a href="https://github.com/IEEEUCSC">
              <div className="md:text-1xl md:p-1 hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize ">WebSite</div>
            </a>
          </div>
          <div>
            <a href="https://github.com/IEEEUCSC">
              <div className="md:text-2xl md:p-1 hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize ">LinkedIn</div>
            </a>
          </div>
          <div>
            <a href="https://github.com/IEEEUCSC">
              <div className="md:text-2xl md:p-1 hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize ">Instagram</div>
            </a>
          </div>
          <div>
            <a href="https://github.com/IEEEUCSC">
              <div className="md:text-2xl md:p-1 hover:text-violet-400 text-white text-center transition-transform transform hover:scale-90 capitalize ">FaceBook</div>
            </a>
          </div>

        </div>

        {/* Copy right Part */}
        <div>
          <p className="md:text-base text-xs items-center content-center justify-center font-pfont ml-8 text-tertiary md:mt-14 hover:text-neutral-500 hover:font-thin md:text-center">
            © {new Date().getFullYear()} IEEE - UCSC All Rights Reserved.
          </p>

        </div>



      </div>
    </main>

  );
};

export default Footer;
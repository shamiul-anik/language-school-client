import { Link } from 'react-router-dom';
import BannerImage from '../../assets/images/lc-banner.png';
import { FaArrowRight } from 'react-icons/fa';
import { Fade, Rotate } from "react-awesome-reveal";

const HomeBanner = () => {
  
  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 max-w-7xl mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-xl p-4" data-aos="fade-left">
          <header className="banner-title">
            <Fade cascade triggerOnce={true}>
              <h1>Welcome to</h1>
            </Fade>
            <Fade duration={300} triggerOnce={true} cascade>Language School</Fade>
          </header>
          <p className="banner-description mt-4 mb-8 lg:mb-12">Unlock the World: Embrace Language at Language School!</p>
          <Link to="/">
            <button type="button" className="flex gap-3 mx-auto md:mx-0 items-center justify-center text-white w-48 bg-gradient-to-br from-teal-500 to-teal-700 ring-2 ring-offset-1 ring-teal-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-xl px-5 py-4 text-center">Explore <FaArrowRight /></button>
          </Link>
        </div>
        <div className="p-2" data-aos="zoom-in">
          <Rotate triggerOnce={true}>
            <img className="max-w-xl w-full image-full rounded-xl" src={BannerImage} alt="Banner Image" />
          </Rotate>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
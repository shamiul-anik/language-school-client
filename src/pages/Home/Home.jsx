import Aos from "aos";
import "aos/dist/aos.css";
import { useTitle } from '../../hooks/useTitle';
import HomeBanner from './HomeBanner';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import { useEffect } from "react";


const Home = () => {
  
  useTitle("Home");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Home Page Banner */}
      <HomeBanner></HomeBanner>

      {/* Home Carousel */}
      <HomeCarousel></HomeCarousel>
    </div>
  );
};

export default Home;
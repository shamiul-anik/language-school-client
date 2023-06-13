import Aos from "aos";
import "aos/dist/aos.css";
import { useTitle } from '../../hooks/useTitle';
import HomeBanner from './HomeBanner';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import { useEffect } from "react";
import Statistics from "./Statistics";
import Newsletter from "./Newsletter";
import Testimonial from "./Testimonial";
import UpcomingCourse from "./UpcomingCourse";


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

      {/* Statistics */}
      <Statistics></Statistics>

      {/* Testimonial */}
      <Testimonial></Testimonial>

      {/* Discount */}
      <UpcomingCourse></UpcomingCourse>

      {/* Subscribe to Our Newsletter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
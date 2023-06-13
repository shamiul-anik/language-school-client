import Aos from "aos";
import { useTitle } from '../../hooks/useTitle';
import HomeBanner from './HomeBanner';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import { useEffect } from "react";
import Statistics from "./Statistics";
import Newsletter from "./Newsletter";
import Testimonial from "./Testimonial";
import UpcomingCourse from "./UpcomingCourse";
import PopularInstructors from "./PopularInstructors";
import PopularClasses from "./PopularClasses";


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

      {/* Popular Classes */}
      <PopularClasses></PopularClasses>
      
      {/* Popular Instructors */}
      <PopularInstructors></PopularInstructors>

      {/* Statistics */}
      <Statistics></Statistics>

      {/* Testimonial */}
      <Testimonial></Testimonial>

      {/* Upcoming Course */}
      <UpcomingCourse></UpcomingCourse>

      {/* Newsletter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
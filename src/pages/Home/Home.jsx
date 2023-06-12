import { useTitle } from '../../hooks/useTitle';
import HomeBanner from './HomeBanner';
import HomeCarousel from './HomeCarousel/HomeCarousel';

const Home = () => {
  
  useTitle("Home");

  return (
    <div>
      {/* Home Page Banner */}
      {/* <HomeBanner></HomeBanner> */}

      {/* Home Carousel */}
      <HomeCarousel></HomeCarousel>
    </div>
  );
};

export default Home;
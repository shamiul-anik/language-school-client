import { useTitle } from '../../hooks/useTitle';
import HomeBanner from './HomeBanner';

const Home = () => {
  
  useTitle("Home");

  return (
    <div>
      {/* Home Page Banner */}
      <HomeBanner></HomeBanner>
    </div>
  );
};

export default Home;
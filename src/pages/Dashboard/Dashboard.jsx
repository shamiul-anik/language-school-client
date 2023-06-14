import Lottie from "lottie-react";
import Loading from '../../assets/lottie/dashboard.json';
import { Fade } from "react-awesome-reveal";
import { useTitle } from "../../hooks/useTitle";

const Dashboard = () => {

  useTitle("Dashboard");

  return (
    <div className="min-h-[calc(100dvh-40px)] grid place-content-center">
      <header>
        <h1 className="text-4xl text-teal-700 font-bold text-center">
          <Fade duration={100} triggerOnce={true} cascade>Welcome to Language School Dashboard!</Fade>
        </h1>
      </header>
      <Lottie className="max-w-3xl mx-auto" animationData={Loading} loop={true} data-aos="zoom-in" />
    </div>
  );
};

export default Dashboard;
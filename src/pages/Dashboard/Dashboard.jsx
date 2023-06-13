import Lottie from "lottie-react";
import Loading from '../../assets/lottie/dashboard.json';

const Dashboard = () => {
  return (
    <div className="min-h-[calc(100dvh-40px)] grid place-content-center">
      <h1 className="text-4xl text-teal-700 font-bold text-center">Welcome to Language School Dashboard!</h1>
      <Lottie className="max-w-3xl mx-auto" animationData={Loading} loop={true} data-aos="zoom-in" />
    </div>
  );
};

export default Dashboard;
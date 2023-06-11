import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import PageNotFound from '../../../assets/lottie/page-not-found-404.json';
import { FaArrowLeft } from 'react-icons/fa';
import { useTitle } from '../../../hooks/useTitle';

const ErrorPage = () => {

  useTitle("Error");

  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col justify-center items-center min-h-[100dvh] p-16">
      <Lottie className="max-w-4xl" animationData={PageNotFound} loop={true} />
      <div className="text-xl text-center">
        <p className="text-red-600 text-6xl mb-2 font-bold">{error?.status}</p>
        <p className="text-red-600 mb-3">{error?.statusText}</p>
        <p className="text-red-600">{error?.data}</p>
        <p className="text-red-600">{error?.message}</p>
      </div>
      <div className="mt-12">
        <Link to="/">
          <button type="button" className="flex gap-3 mx-auto md:mx-0 items-center justify-center text-white bg-gradient-to-br from-teal-600 to-teal-700 ring-2 ring-offset-1 ring-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-xl px-5 py-4 text-center"><FaArrowLeft className='' /> Back to Main</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
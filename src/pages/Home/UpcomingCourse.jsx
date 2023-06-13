import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const UpcomingCourse = () => {
  return (
    <section className="mt-16 md:mt-22 max-w-7xl p-4 mx-auto rounded-lg bg-white dark:bg-gray-900" data-aos="flip-left">
      
      <SectionTitle heading="Upcoming Course" subHeading="Check out to know about our upcoming course!"></SectionTitle>
      
      <section className="mt-6 md:mt-12 rounded-xl bg-no-repeat bg-center bg-cover bg-[url('https://i.ibb.co/74RgJvX/upcoming-language.png')] bg-teal-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-28">
          <h1 className="banner-title"><span className="banner-highlighted-text"> Next Course Starting</span> <br /> <span className="text-4xl text-blue-100">LANGUAGE TRAININGS: EFFICIENT NEGOTIATING</span></h1>
          <p className="mt-8 mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">BECOME A MEMBER TODAY</p>
          
          <div className="grid justify-center mt-2 md:mt-4 mb-4 md:mb-8 font-bold text-blue-100 grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col border-2 border-teal-200 p-4 rounded-xl">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col border-2 border-teal-200 p-4 rounded-xl">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col border-2 border-teal-200 p-4 rounded-xl">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col border-2 border-teal-200 p-4 rounded-xl">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 27 }}></span>
              </span>
              sec
            </div>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a> */}
            <Link to="/" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </Link>
          </div>
        </div>
      </section>

    </section>
  );
};

export default UpcomingCourse;
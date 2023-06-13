import { BsFillSendFill } from "react-icons/bs";
import SectionTitle from "../../components/SectionTitle";

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-20" data-aos="zoom-in">
      
      <SectionTitle heading="Newsletter" subHeading="Stay in the loop by subscribing to our Newsletter!"></SectionTitle>

      <div className="mx-4 p-6 lg:p-12 rounded-lg border-2 shadow-lg border-teal-400 mt-6">
        <p className='content-description text-center'>Stay Connected with Language School!</p>
        <p className='content-description text-center mt-2'>Sign up for our newsletter and be the first to know about the latest updates, exclusive offers, and valuable resources from Language School. Our newsletter is packed with insightful content, language learning tips, and exciting updates to support your language learning journey.</p>
        <p className='content-description text-center mt-2'>Join our vibrant community of language learners, educators, and enthusiasts who are passionate about unlocking the power of languages.</p>
        <p className='content-description text-center mt-2'>Enter your email address below and click 'Subscribe' to start receiving our informative and inspiring newsletter. <br /> Don't miss out on the opportunity to immerse yourself in a world of language learning resources and stay up to date with the latest developments in the language education field.</p>
        <p className='content-description text-center mt-2 mb-6'>Subscribe to the Language School newsletter today and embark on a rewarding language learning adventure!</p>
        <div className="relative mt-6 mb-3 md:mb-7 max-w-xl mx-auto">
          <input type="text" placeholder="Enter your email address" className="input input-bordered input-accent focus:border-teal-500 focus:ring-teal-500 outline:border-teal-500 w-full pr-16" />
          <button className="btn absolute btn-accent top-0 right-0 rounded-l-none">
            <BsFillSendFill className='text-lg md:text-xl font-bold' />
            <span className='hidden md:block ml-1'>Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
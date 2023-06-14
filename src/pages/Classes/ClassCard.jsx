import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import { MdOutlineAddTask } from "react-icons/md";

const ClassCard = ({ classData, userRole, handleSelectClass }) => {
  // console.log(classData);
  const { class_name, class_image, instructor_name, available_seats, class_price } = classData || {};
  return (
    <div>
      <div className={`flex card card-compact w-full ${available_seats == 0 ? 'bg-red-200' : 'bg-base-100'} box-shadow-custom group`} data-aos="zoom-in">
        <LazyLoad offset={500}>
          <figure className='rounded-t-xl'>
            <img className='overflow-hidden h-80 w-full object-cover rounded-t-xl transition duration-300 group-hover:scale-110' src={class_image} alt={`${class_name} Image`} />
          </figure>
        </LazyLoad>
        <div className='border-t border-slate-300 mb-1'></div>
        <div className="flex-1 p-4 pt-4 pb-0">
          <h3 className='text-center text-xl text-slate-700 font-bold'>{class_name}</h3>
          <h4 className='text-center text-lg text-slate-500 font-semibold mt-2'>{instructor_name}</h4>
          <p className='font-medium text-base text-center mt-3 mb-1 text-slate-600'>Available Seats: {available_seats}</p>
          <p className='font-medium text-lg text-center mb-2 text-slate-600'>Price: ${class_price}</p>
        </div>
        {/* <button className="flex my-2 w-fit mx-auto items-center justify-center p-0.5 overflow-hidden text-lg font-semibold text-teal-700 rounded-lg bg-gradient-to-br from-teal-600 to-teal-500 hover:from-teal-600 hover:to-teal-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 disabled:from-slate-600 disabled:to-slate-500 disabled:text-teal-700 disabled:hover:from-slate-600 disabled:hover:to-slate-500" disabled>
          <span className="flex items-center justify-center w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md hover:bg-opacity-0 disabled:bg-slate-500">
            <MdOutlineAddTask className="mr-2 self-center" /> Select Class
          </span>
        </button> */}
        <button onClick={ () => handleSelectClass(classData)} type="button" className="flex mt-2 w-48 mx-auto justify-center items-center text-white bg-gradient-to-br from-teal-500 to-teal-600 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-normal rounded-md text-lg px-3 py-2.5 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={available_seats === 0 || userRole === "admin" || userRole === "instructor"} >
          <MdOutlineAddTask className='gr-icon w-4 h-4 mr-2' />
          Select Class
        </button>
        <div className='border-t border-slate-300 my-4'></div>
        <div className="p-4 pt-0">
          <div className='flex items-center justify-center'>
            <div className="grid grid-flow-col gap-4">
              <Link to="https://www.facebook.com" data-tip="Facebook" className="tooltip tooltip-bottom cursor-pointer transition duration-200 transform hover:-translate-y-2 text-teal-600 border-2 border-teal-400 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
              <Link to="https://www.twitter.com" data-tip="Twitter" className="tooltip tooltip-bottom cursor-pointer transition duration-200 transform hover:-translate-y-2 text-teal-600 border-2 border-teal-400 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
              <Link to="https://www.instagram.com" data-tip="Instagram" className="tooltip tooltip-bottom cursor-pointer transition duration-200 transform hover:-translate-y-2 text-teal-600 border-2 border-teal-400 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
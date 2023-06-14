import { GrValidate } from "react-icons/gr";
import { LuShieldClose } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { Link } from "react-router-dom";

const SingleClass = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
        {/* {index + 1} */}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        <div className="avatar flex items-center justify-center ">
          <div className="w-24 rounded-xl">
            {/* <img src={photo_url} alt={`Profile of ${name}`} /> */}
            Class Image
          </div>
        </div>
      </td>
      <td className="px-2 py-2 border-r-2">
        Class Name
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        Instructor Name
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        Instructor Email
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        Available Seats
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        Price
      </td>
      <td className="px-2 py-2 text-center uppercase border-r-2">
        Status
      </td>
      <td className="px-2 py-2 text-center">
        <Link>
          <button type="button" className="flex w-40 mx-auto justify-center items-center text-white bg-gradient-to-br from-teal-500 to-teal-600 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
            <GrValidate className='gr-icon w-4 h-4 mr-2' />
            Approve
          </button>
        </Link>
        <Link>
          <button type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
            <LuShieldClose className='gr-icon w-4 h-4 mr-2' />
            Deny
          </button>
        </Link>
        <Link>
          <button type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-all hover:duration-300 hover:from-blue-600 hover:to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
            <VscFeedback className='gr-icon w-4 h-4 mr-2' />
            Send Feedback
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleClass;
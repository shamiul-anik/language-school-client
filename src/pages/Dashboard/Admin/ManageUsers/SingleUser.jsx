import { Link } from "react-router-dom";

const SingleUser = ({ user, index, handleMakeInstructor, handleMakeAdmin, disableInstructorBtn, disableAdminBtn }) => {
  
  const { _id, photo_url, name, email, role } = user || {};

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-2 py-2 whitespace-nowrap text-center">
        {index + 1}
      </td>
      <td className="px-2 py-2 text-center flex items-center">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src={photo_url} alt={`Profile of ${name}`} />
          </div>
        </div>
      </td>
      <td className="px-2 py-2">
        {name}
      </td>
      <td className="px-2 py-2 text-center">
        {email}
      </td>
      <td className="px-2 py-2 text-center uppercase">
        {role}
      </td>
      <td className="px-2 py-2 text-center">
        <Link onClick={() => handleMakeInstructor(_id)}>
          <button type="button" className="flex w-40 mx-auto justify-center items-center text-white bg-gradient-to-br from-teal-500 to-teal-600 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={disableInstructorBtn}>Make Instructor</button>
        </Link>
        <Link onClick={() => handleMakeAdmin(_id)}>
          <button type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={disableAdminBtn}>Make Admin</button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleUser;
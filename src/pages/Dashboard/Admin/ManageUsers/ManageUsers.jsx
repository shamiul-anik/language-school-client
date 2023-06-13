import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import SingleUser from "./SingleUser";

const ManageUsers = () => {

  const { user, loading, setLoading } = useContext(AuthContext);
  const [disableInstructorBtn, setDisableInstructorBtn] = useState(false);
  const [disableAdminBtn, setDisableAdminBtn] = useState(false);

  // TODO: Change to AxiosSecure
  const { data: usersData = [], refetch } = useQuery({
    queryKey: ["usersData", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      setLoading(false);
      return res?.data;
    },
  })

  const handleMakeInstructor = (id) => {
    console.log("Inside Make Instructor: ", id);
    setDisableInstructorBtn(true);
    refetch();
  };
  
  const handleMakeAdmin = (id) => {
    console.log("Inside Make Admin: ", id);
    setDisableAdminBtn(true);
    refetch();
  };

  console.log(usersData);

  return (
    <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">
      
      <div>
        <h1 className="text-3xl font-bold text-center mb-6">Total Users: {usersData.length}</h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                #
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                Photo
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                Name
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                Email
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                Role
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              usersData.map((user, index) => <SingleUser key={user._id} user={user} index={index} handleMakeInstructor={handleMakeInstructor} disableInstructorBtn={disableInstructorBtn} handleMakeAdmin={handleMakeAdmin} disableAdminBtn={disableAdminBtn} ></SingleUser>)
            }
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default ManageUsers;
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";
import MySingleClass from "./MySingleClass";
import { useTitle } from "../../../../hooks/useTitle";

const MyClasses = () => {

  useTitle("My Classes");

  const { user, setUserRole, loading, setLoading } = useContext(AuthContext);

  // TODO: Change to AxiosSecure
  const { data: myClassDetails = [], refetch } = useQuery({
    queryKey: ["myClassDetails", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/my-classes/${user?.email}`);
      setLoading(false);
      // console.log(res?.data);
      return res?.data;
    },
  });


  return (
    <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

      <div>
        <h1 className="text-3xl font-bold text-center mb-6">My Total Classes: {myClassDetails?.length}</h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                #
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Class <br /> Image
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Class <br /> Name
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Instructor <br /> Name
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Instructor <br /> Email
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Available <br /> Seats
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Enrolled <br /> Students
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Price
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Status
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Feedback
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              myClassDetails?.map((classData, index) => <MySingleClass key={classData._id} classData={classData} index={index}></MySingleClass>)
            }
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default MyClasses;
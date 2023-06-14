import { useContext, useState } from "react";
import FeedbackModal from "./FeedbackModal";
import SingleClass from "./SingleClass";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ManageClasses = () => {

  const { user, setUserRole, loading, setLoading } = useContext(AuthContext);
  
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false)
  };

  // TODO: Change to AxiosSecure
  const { data: allClassData = [], refetch } = useQuery({
    queryKey: ["allClassData", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/classes`);
      setLoading(false);
      console.log(res?.data);
      return res?.data;
    },
  });

  const handleApprove = (classData) => {
    console.log("Inside Approve: ", classData._id);
    if (classData) {
      axios.patch(`${import.meta.env.VITE_API_URL}/class/${classData._id}`).then(
        (data) => {
          console.log("Approve Status:", data?.data);
          if (data?.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `${classData.class_name} is approved!`,
              showConfirmButton: false,
              timer: 3000
            });
          }
        }
      );
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <div>
          <h1 className="text-3xl font-bold text-center mb-6">Total Classes: {allClassData?.length}</h1>
        </div>

        <div className="relative overflow-x-auto">
          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  #
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Class <br/> Image
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Class <br/> Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Instructor <br/> Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Instructor <br/> Email
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Available <br/> Seats
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Enrolled <br/> Students
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Price
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Status
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allClassData?.map((classData, index) => <SingleClass key={classData._id} classData={classData} index={index} handleApprove={handleApprove} openModal={openModal} closeModal={closeModal} ></SingleClass>)
              }
            </tbody>
          </table>
        </div>

      </section>

      {/* FeedbackModal */}
      <FeedbackModal isOpen={isOpen} openModal={openModal} closeModal={closeModal}></FeedbackModal>
    </>
  );
};

export default ManageClasses;
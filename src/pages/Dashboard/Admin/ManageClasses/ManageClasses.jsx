import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import SingleClass from "./SingleClass";

const ManageClasses = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false)
  };

  return (
    <>
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <div>
          <h1 className="text-3xl font-bold text-center mb-6">Total Classes: ??</h1>
        </div>

        <div className="relative overflow-x-auto">
          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  #
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Class Image
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Class Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Instructor Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Instructor Email
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Available Seats
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
              {/* {
              usersData.map((user, index) => <SingleUser key={user._id} user={user} index={index} handleMakeInstructor={handleMakeInstructor} disableInstructorBtn={disableInstructorBtn} handleMakeAdmin={handleMakeAdmin} disableAdminBtn={disableAdminBtn} ></SingleUser>)
            } */}
              <SingleClass openModal={openModal} closeModal={closeModal}></SingleClass>
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
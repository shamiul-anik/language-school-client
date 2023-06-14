import AddClassImage from '../../../../assets/images/language-banner.jpg';
import { Fade } from "react-awesome-reveal";
import { AuthContext } from '../../../../providers/AuthProvider';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddClass = () => {

  const { user } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const currentUserName = user?.displayName;
  const currentUserEmail = user?.email;

  const onSubmit = (classInfo) => { 
    // console.log(classInfo);

    const classDetails = {
      class_name: classInfo.class_name,
      class_image: classInfo.class_image,
      instructor_name: classInfo.instructor_name,
      instructor_email: classInfo.instructor_email,
      available_seats: parseFloat(classInfo.available_seats),
      enrolled_students: parseFloat(0),
      class_price: parseFloat(classInfo.price),
      class_status: "pending"
    }
    console.log(classDetails);
    if(user && user.email) {
      axios.post(`${import.meta.env.VITE_API_URL}/add-a-class`, classDetails)
        .then((data) => {
          console.log(data.data);
          if (data?.data?.insertedId) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Class added successfully!',
              showConfirmButton: true,
              timer: 3000
            })
          }
        });
    }
  };

  return (
    <>
      <header>
        <h1 className="text-5xl text-teal-700 font-bold text-center mt-4 lg:mt-8" data-aos="zoom-in">
          <Fade duration={200} triggerOnce={true} cascade>Add a Class</Fade>
        </h1>
      </header>
      <section className="flex flex-col md:flex-row gap-4 md:gap-12 items-center max-w-7xl mx-auto mt-6 lg:mt-12 p-4 md:p-8 border-2 border-slate-200 rounded-3xl">
        <div>
          <img className="w-full min-w-[350px] image-full" src={AddClassImage} alt="Add Class Image" />
        </div>
        <div className="flex min-w-[450px] max-w-3xl card card-compact w-full bg-base-100 px-0 md:px-4 py-2 md:py-7 box-shadow-custom">

          <div className="flex-1 mb-2">
            <h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Enter Class Details</h3>
          </div>

          <div className='border-t border-slate-300 my-2 mx-6 md:mx-8'></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="!px-6 md:!px-8 !pt-2 card-body">
              <div className="form-control">
                <label className="label pl-0" htmlFor="className">
                  <span className="label-text text-md md:text-[16px]">Class Name</span>
                </label>
                <input type="text" id="className" {...register("class_name", { required: true })} name="class_name" placeholder="Enter class name" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                {errors?.class_name && <p className="text-red-500 mt-2">Class name is required!</p>} {/* Error Message */}
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="classImage">
                  <span className="label-text text-md md:text-[16px]">Class Image</span>
                </label>
                <input type="text" id="classImage" {...register("class_image", { required: true })} name="class_image" placeholder="Enter class image" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                {errors?.class_image && <p className="text-red-500 mt-2">Photo url is required!</p>} {/* Error Message */}
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="instructorName">
                  <span className="label-text text-md md:text-[16px]">Instructor Name</span>
                </label>
                <input type="text" id="instructorName" {...register("instructor_name", { required: true })} name="instructor_name" placeholder="Instructor's name" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" defaultValue={currentUserName} readOnly />
                {errors?.instructor_name && <p className="text-red-500 mt-2">Instructor name is required!</p>} {/* Error Message */}
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="instructorEmail">
                  <span className="label-text text-md md:text-[16px]">Instructor Email</span>
                </label>
                <input type="email" id="instructorEmail" {...register("instructor_email", { required: true })} name="instructor_email" placeholder="Instructor's email address" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" defaultValue={currentUserEmail} readOnly />
                {errors?.instructor_email && <p className="text-red-500 mt-2">Instructor email is required!</p>} {/* Error Message */}
              </div>

              <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="form-control">
                  <label className="label pl-0" htmlFor="availableSeats">
                    <span className="label-text text-md md:text-[16px]">Available Seats</span>
                  </label>
                  <input type="text" id="availableSeats" {...register("available_seats", { required: true, pattern: { value: /^(\d+\.?\d*|\.\d+)$/ } })} name="available_seats" placeholder="Enter number of available seats" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.available_seats?.type === 'required' && <p className="text-red-500 mt-2">Available seats are required!</p>}
                  {errors?.available_seats?.type === 'pattern' && <p className="text-red-500 mt-2">Available seats value must be a number!</p>}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="price">
                    <span className="label-text text-md md:text-[16px]">Price</span>
                  </label>
                  <input type="text" id="price" {...register("price", { required: true, pattern: { value: /^(\d+\.?\d*|\.\d+)$/ } })} name="price" placeholder="Enter price" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.price?.type === 'required' && <p className="text-red-500 mt-2">Price is required!</p>} {/* Error Message */}
                  {errors?.price?.type === 'pattern' && <p className="text-red-500 mt-2">Price value must be a number!</p>}
                </div>
              </div>
              <div className="form-control mt-3">
                <button type="submit" className="text-white bg-gradient-to-br from-teal-500 to-teal-600 ring-2 ring-offset-1 ring-teal-500 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Add Class</button>
              </div>
            </div>
          </form>

        </div>
      </section>
    </>
  );
};

export default AddClass;
import AddClassImage from '../../../../assets/images/language-banner.jpg';
import { Fade } from "react-awesome-reveal";
import { AuthContext } from '../../../../providers/AuthProvider';
import { useContext } from 'react';

const AddClass = () => {

  const { user } = useContext(AuthContext);

  const currentUserName = user?.displayName;
  const currentUserEmail = user?.email;

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

          {/* {error && <p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>} */}
          {/* {success && <p className="!px-6 md:!px-8 text-green-600 mt-2 text-center">{success}</p>} */}

          <form >
            <div className="!px-6 md:!px-8 !pt-2 card-body">
              <div className="form-control">
                <label className="label pl-0" htmlFor="className">
                  <span className="label-text text-md md:text-[16px]">Class Name</span>
                </label>
                <input type="text" id="className" name="class_name" placeholder="Enter class name" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                {/* <input type="text" id="toyName" name="toy_name" placeholder="Enter toy name" className={toyNameError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} /> */}
                {/* {toyNameError && <p className="text-red-500 mt-2">{toyNameError}</p>} */}
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="photoURL">
                  <span className="label-text text-md md:text-[16px]">Class Image</span>
                </label>
                <input type="text" id="photoURL" name="photo_url" placeholder="Enter class image" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                {/* <input type="text" id="photoURL" name="photo_url" placeholder="Enter toy's photo url" className={photoURLError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} /> */}
                {/* {photoURLError && <p className="text-red-500 mt-2">{photoURLError}</p>} */}
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="instructorName">
                  <span className="label-text text-md md:text-[16px]">Instructor Name</span>
                </label>
                <input type="text" id="instructorName" name="instructor_name" placeholder="Instructor's name" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" defaultValue={currentUserName} readOnly />
                {/* <input type="text" id="sellerName" name="seller_name" placeholder="Instructor's name" className="input input-bordered input-sm py-5 text-[14px]" defaultValue={currentUserName} readOnly /> */}
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="instructorEmail">
                  <span className="label-text text-md md:text-[16px]">Instructor Email</span>
                </label>
                <input type="email" id="instructorEmail" name="instructor_email" placeholder="Instructor's email address" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" defaultValue={currentUserEmail} readOnly />
                {/* <input type="email" id="sellerEmail" name="seller_email" placeholder="Instructor's email address" className={sellerEmailError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} defaultValue={currentUserEmail} readOnly /> */}
                {/* {sellerEmailError && <p className="text-red-500 mt-2">{sellerEmailError}</p>} */}
              </div>

              <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                

                {/* <div className="form-control">
                <label className="label pl-0" htmlFor="subCategory">
                  <span className="label-text text-md md:text-[16px]">Sub-category</span>
                </label>
                <select id="subCategory" name="sub_category" className={subCategoryError ? "select select-bordered border-red-500 select-sm min-h-[42px] leading-tight !text-[14px] !font-normal focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "select select-bordered select-sm min-h-[42px] leading-tight !text-[14px] !font-normal"}>
                  <option value="">Choose sub-category</option>
                  <option value="Language Toys">Language Toys</option>
                  <option value="Math Toys">Math Toys</option>
                  <option value="Science Toys">Science Toys</option>
                </select>
                {subCategoryError && <p className="text-red-500 mt-2">{subCategoryError}</p>}
              </div> */}

                <div className="form-control">
                  <label className="label pl-0" htmlFor="availableSeats">
                    <span className="label-text text-md md:text-[16px]">Available Seats</span>
                  </label>
                  <input type="text" id="availableSeats" name="available_seats" placeholder="Enter number of available seats" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {/* <input type="text" id="rating" name="rating" placeholder="Enter toy's rating" className={ratingError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} /> */}
                  {/* {ratingError && <p className="text-red-500 mt-2">{ratingError}</p>} */}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="price">
                    <span className="label-text text-md md:text-[16px]">Price</span>
                  </label>
                  <input type="text" id="price" name="price" placeholder="Enter price" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {/* <input type="text" id="price" name="price" placeholder="Enter toy's price" className={priceError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} /> */}
                  {/* {priceError && <p className="text-red-500 mt-2">{priceError}</p>} */}
                </div>

                {/* <div className="form-control">
                  <label className="label pl-0" htmlFor="quantity">
                    <span className="label-text text-md md:text-[16px]">Quantity</span>
                  </label>
                  <input type="text" id="quantity" name="quantity" placeholder="Enter available quantity" className="input input-bordered input-sm py-5 text-[14px]" />
                  <input type="text" id="quantity" name="quantity" placeholder="Enter available quantity" className={quantityError ? "input input-error input-sm py-5 text-[14px] focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered input-sm py-5 text-[14px]"} />
                  {quantityError && <p className="text-red-500 mt-2">{quantityError}</p>}
                </div> */}
              </div>

              {/* <div className="form-control">
              <label className="label pl-0" htmlFor="description">
                <span className="label-text text-md md:text-[16px]">Description</span>
              </label>
              <textarea id="description" name="description" rows="6" className={descriptionError ? "input input-error input-sm py-5 text-[14px] h-auto focus:outline-red-200 focus:ring-red-500 focus:border-red-500" : "input input-bordered text-[14px] h-auto"} placeholder="Enter detail description"></textarea>
              {descriptionError && <p className="text-red-500 mt-2">{descriptionError}</p>}
            </div> */}

              <div className="form-control mt-3">
                {/* <button type="submit" className="flex gap-3 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-lg px-8 py-2 text-center disabled:from-slate-300 disabled:to-slate-400 disabled:text-slate-600 tooltip tooltip-bottom">Add Toy</button> */}
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
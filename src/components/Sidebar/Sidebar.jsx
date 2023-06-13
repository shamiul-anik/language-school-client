import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import Logo from '../../assets/images/logo.png';
import UserImage from '../../assets/images/user.png'
import { AiOutlineBars } from 'react-icons/ai'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { toast } from 'react-toastify';
import { BiDetail, BiHome, BiLogOut, BiUser } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { GiTeacher } from 'react-icons/gi';
import { LuContact } from 'react-icons/lu';

const Sidebar = () => {
  
  const { user, userRole, loading, setLoading, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isActive, setActive] = useState('false');

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      })
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-teal-50 text-teal-700 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to="/" className="flex gap-3 md:gap-3 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-teal-600 hover:bg-inherit">
              <img className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-teal-700" src={Logo} alt="Logo" />
              <span className='flex items-center text-xl md:text-3xl'>Language School</span>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-teal-100'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-teal-50 w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform 
        ${ isActive && '-translate-x-full' } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className='w-full hidden md:flex py-2 justify-center items-center bg-teal-100 mx-auto'>
              <Link to="/" className="flex gap-3 md:gap-3 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-teal-600 hover:bg-inherit">
                <img className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-teal-700" src={Logo} alt="Logo" />
                <span className='flex items-center text-lg md:text-xl'>Language School</span>
              </Link>
            </div>
            <div className='flex flex-col items-center mt-6 -mx-2'>
              <Link to='/dashboard'>
                {
                  user?.photoURL ?
                    <img
                      className='object-cover w-24 h-24 mx-2 rounded-full border border-teal-400 ring-2 ring-offset-1 ring-teal-500'
                      src={user?.photoURL}
                      alt='avatar'
                      referrerPolicy='no-referrer'
                    />
                    :
                    <img
                      className='object-cover w-24 h-24 mx-2 rounded-full border border-teal-400 ring-2 ring-offset-1 ring-teal-500'
                      src={UserImage}
                      alt='avatar'
                      referrerPolicy='no-referrer'
                    />
                }
              </Link>
              <Link to='/dashboard'>
                <h4 className='mx-2 mt-3 font-medium text-gray-800  hover:underline'>
                  {user?.displayName}
                </h4>
              </Link>
              <Link to='/dashboard'>
                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>
          <div className="divider mt-3 mb-2"></div>
          {/* Nav Items */}
          <div className='flex flex-col justify-start flex-1'>
            <nav>
              <>
                {/* <label
                  htmlFor='Toggle3'
                  className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
                >
                  <input
                    onChange={toggleHandler}
                    id='Toggle3'
                    type='checkbox'
                    className='hidden peer'
                  />
                  <span className='px-4 py-1 rounded-l-md bg-rose-400 peer-checked:bg-gray-300'>
                    Guest
                  </span>
                  <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-rose-400'>
                    Host
                  </span>
                </label> */}
                {/* Menu Links */}
                <NavLink
                  to='/add-room'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                  }
                >
                  <BsFillHouseAddFill className='w-5 h-5' />
                  <span className='mx-4 font-medium'>Add Room</span>
                </NavLink>
              </>
            </nav>
          </div>
        </div>

        <div>
          <div className="divider my-2"></div>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <BiHome className='w-5 h-5' />
            <span className='mx-4 font-medium'>Home</span>
          </NavLink>
          <NavLink
            to='/instructors'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <BiUser className='w-5 h-5' />
            <span className='mx-4 font-medium'>Instructors</span>
          </NavLink>
          <NavLink
            to='/classes'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <GiTeacher className='w-5 h-5' />
            <span className='mx-4 font-medium'>Classes</span>
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <LuContact className='w-5 h-5' />
            <span className='mx-4 font-medium'>Contact</span>
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <BiDetail className='w-5 h-5' />
            <span className='mx-4 font-medium'>About</span>
          </NavLink>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <ImProfile className='w-5 h-5' />
            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-2 text-red-600 hover:bg-red-200 hover:text-red-700 transition-colors duration-300 transform'
          >
            <BiLogOut className='w-5 h-5' />
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar

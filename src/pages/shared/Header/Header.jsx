import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import Logo from '../../../assets/images/logo.png';
import UserImage from '../../../assets/images/user.png'
import './Header.css';
import { MdLogin, MdLogout } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

const Header = () => {

	const { user, userRole, logOut, loading, setLoading } = useContext(AuthContext);

	const navigate = useNavigate();

	// Show Loader when Page is Loading
	// if (loading) {
	// 	return <Loader></Loader>;
	// }

	const currentUserName = user?.displayName || "Welcome, User!";
	const currentUserPhotoURL = user?.photoURL || UserImage;
	const currentUserEmail = user?.email;

	// console.log("Name from Header: ", currentUserName);
	// console.log("Photo URL from Header: ", currentUserPhotoURL);

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
		<div className="bg-teal-700 py-2">
			<nav className={`navbar gap-4 ${user ? 'justify-between' : ''} max-w-7xl mx-auto`}>
				<div className="navbar-start w-auto">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost text-slate-100 lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52 z-10">
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li className="hover:cursor-pointer">
								<NavLink to="/instructors">Instructors</NavLink>
							</li>
							<li className="hover:cursor-pointer">
								<NavLink to="/classes">Classes</NavLink>
							</li>
							{user && (
								<>
									<li className="hover:cursor-pointer">
										<NavLink to="/dashboard">Dashboard</NavLink>
									</li>
								</>
							)}
							<li className="hover:cursor-pointer">
								<NavLink to="/contact">Contact</NavLink>
							</li>
							<li className="hover:cursor-pointer">
								<NavLink to="/about">About</NavLink>
							</li> 
							{
								!user && (
									<>
										<div className="divider my-0"></div>
										<li>
											{/* <Link to="/login" className="primary-button-sm justify-center">Login</Link> */}
											<Link className='p-0 flex' to="/login">
												<button type="button" className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-teal-500 to-teal-700 ring-2 ring-teal-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-sm px-8 py-2 text-center">
													<MdLogin className='text-xl'></MdLogin>
													Login
												</button>
											</Link>
										</li>
									</>
								)
							}
						</ul>
					</div>
					<Link to="/" className="flex gap-3 md:gap-3 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-slate-700 hover:bg-inherit">
						<img className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-teal-700" src={Logo} alt="Logo" />
						<span className='flex items-center banner-highlighted-text text-xl md:text-3xl'>Language School</span>
					</Link>
				</div>

				{/* User Profile */}
				{
					user && (
						<div className="navbar-end w-auto mr-1 md:hidden">
							<div className="dropdown dropdown-end mt-1">
								<label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={currentUserName}>
									<div className="w-10 rounded-full ring-2 ring-offset-2 ring-teal-400">
										<img className='object-top' src={currentUserPhotoURL} alt={currentUserName} />
									</div>
								</label>
								<ul tabIndex={0} className="mt-1 p-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 z-10">
									<div className='w-full flex justify-center'>
										<div className="mt-2 mb-3 h-16 w-16 rounded-full ring-2 ring-offset-2 ring-slate-400">
											<img className='h-16 w-full rounded-full object-cover object-center' src={currentUserPhotoURL} alt={currentUserName} />
										</div>
									</div>
									<li className='mt-1 text-center font-bold'>
										{currentUserName}
									</li>
									<p className='text-slate-600 text-sm mt-1 mb-2 font-normal text-center'>{currentUserEmail}</p>
									{
										userRole && <p className="uppercase px-5 py-0.5 text-sm bg-teal-300 w-fit mx-auto rounded-xl">{userRole}</p>
									}
									<div className="divider mt-1 mb-2"></div>
									<li>
										<Link className='flex p-0 mb-2' to="/profile">
											<button type="button" className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-8 py-2 text-center">
												<ImProfile className='text-xl'></ImProfile>
												Profile
											</button>
										</Link>
									</li>
									<li>
										<Link className='flex p-0' onClick={handleLogOut}>
											<button type="button" className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-sm px-8 py-2 text-center">
												<MdLogout className='text-xl'></MdLogout>
												Logout
											</button>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					)
				}

				<div className="navbar-center mx-auto hidden lg:flex">
					<ul className="flex gap-10 text-xl font-semibold menu-horizontal px-1 z-10">
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/instructors">Instructors</NavLink>
						</li>
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/classes">Classes</NavLink>
						</li>
						{user && (
							<>
								<li className="nav-item hover:cursor-pointer">
									<NavLink to="/dashboard">Dashboard</NavLink>
								</li>
							</>
						)}
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/contact">Contact</NavLink>
						</li>
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/about">About</NavLink>
						</li>
					</ul>
				</div>

				<div className="navbar-end w-auto hidden lg:flex">
					<ul className="flex items-center gap-10 text-xl font-semibold menu-horizontal px-1">
						{
							!user && (
								<li>
									<Link to="/login">
										<button type="button" className="flex gap-2 mx-auto md:mx-0 items-center justify-center text-white bg-gradient-to-br from-teal-500 to-teal-700 hover:bg-gradient-to-bl ring-2 ring-teal-400 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-lg px-8 py-2 text-center">
											<MdLogin className='text-2xl'></MdLogin>
											Login
										</button>
									</Link>
								</li>
							)
						}
					</ul>

					{/* User Profile */}
					{
						user && (
							<div className="dropdown dropdown-end mt-1 ml-6">
								<label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={currentUserName}>
									<div className="w-10 rounded-full ring-2 ring-offset-2 ring-teal-400">
										<img className='object-top' src={currentUserPhotoURL} alt={currentUserName} />
									</div>
								</label>
								<ul tabIndex={0} className="mt-3 p-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 z-10">
									<div className='w-full flex justify-center'>
										<div className="mt-2 mb-3 h-16 w-16 rounded-full ring-2 ring-offset-2 ring-slate-400">
											<img className='h-16 w-full rounded-full object-cover object-center' src={currentUserPhotoURL} alt={currentUserName} />
										</div>
									</div>
									<li className='mt-1 text-center font-bold'>
										{currentUserName}
									</li>
									<p className='text-slate-600 text-sm mt-1 mb-2 font-normal text-center'>{currentUserEmail}</p>
									{
										userRole && <p className="uppercase px-5 py-0.5 text-sm bg-teal-300 w-fit mx-auto rounded-xl">{userRole}</p>
									}
									<div className="divider mt-1 mb-2"></div>
									<li>
										{/* <Link to="/profile" className="mb-2 bg-blue-500 hover:bg-blue-600 transition hover:delay-200 text-white font-bold py-2 justify-center">Profile</Link> */}
										<Link className='flex p-0 mb-2' to="/profile">
											<button type="button" className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-teal-400 to-teal-600 ring-2 ring-teal-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-8 py-2 text-center">
												<ImProfile className='text-xl'></ImProfile>
												Profile
											</button>
										</Link>
									</li>
									<li>
										{/* <Link onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 transition hover:delay-200 text-white font-bold py-2 justify-center">Logout</Link> */}
										<Link className='flex p-0' onClick={handleLogOut}>
											<button type="button" className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-red-600 to-orange-500 ring-2 ring-orange-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-sm px-8 py-2 text-center">
												<MdLogout className='text-xl'></MdLogout>
												Logout
											</button>
										</Link>
									</li>
								</ul>
							</div>
						)
					}

				</div>
			</nav>
		</div>
	);
};

export default Header;
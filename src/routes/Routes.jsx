/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../pages/shared/Loader/Loader";
// import DashboardLayout from "../layouts/DashboardLayout";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const ErrorPage = lazy(() => import("../pages/shared/ErrorPage/ErrorPage"));
const Home = lazy(() => import("../pages/Home/Home"));

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Instructors = lazy(() => import("../pages/Instructors/Instructors"));
const Classes = lazy(() => import("../pages/Classes/Classes"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const About = lazy(() => import("../pages/About/About"));
const Login = lazy(() => import("../pages/Authentication/Login/Login"));
const Registration = lazy(() => import("../pages/Authentication/Registration/Registration"));
const PasswordReset = lazy(() => import("../pages/Authentication/PasswordReset/PasswordReset"));
const Profile = lazy(() => import("../pages/Authentication/Profile/Profile"));

const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const ManageUsers = lazy(() => import("../pages/Dashboard/Admin/ManageUsers/ManageUsers"));
const ManageClasses = lazy(() => import("../pages/Dashboard/Admin/ManageClasses/ManageClasses"));
const AddClass = lazy(() => import("../pages/Dashboard/Instructor/AddClass/AddClass"));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<Loader></Loader>}><Home></Home></Suspense>,
			},
			{
				path: '/instructors',
				element: <Suspense fallback={<Loader></Loader>}><Instructors></Instructors></Suspense>,
			},
			{
				path: '/classes',
				element: <Suspense fallback={<Loader></Loader>}><Classes></Classes></Suspense>,
			},
			{
				path: 'login',
				element: <Suspense fallback={<Loader></Loader>}><Login></Login></Suspense>
			},
			{
				path: 'registration',
				element: <Suspense fallback={<Loader></Loader>}><Registration></Registration></Suspense>
			},
			{
				path: 'password-reset',
				element: <Suspense fallback={<Loader></Loader>}><PasswordReset></PasswordReset></Suspense>
			},
			{
				path: 'profile',
				element: <Suspense fallback={<Loader></Loader>}><Profile></Profile></Suspense>
			},
			{
				path: 'contact',
				element: <Suspense fallback={<Loader></Loader>}><Contact></Contact></Suspense>
			},
			{
				path: 'about',
				element: <Suspense fallback={<Loader></Loader>}><About></About></Suspense>
			}
		]
	},
	{
		path: '/dashboard',
		element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/dashboard',
				element: <Suspense fallback={<Loader></Loader>}><Dashboard></Dashboard></Suspense>,
			},
			{
				path: '/dashboard/my-selected-classes',
				element: <Suspense fallback={<Loader></Loader>}><p>My Selected Classes</p></Suspense>,
			},
			{
				path: '/dashboard/manage-users',
				element: <Suspense fallback={<Loader></Loader>}><ManageUsers></ManageUsers></Suspense>,
			},
			{
				path: '/dashboard/manage-classes',
				element: <Suspense fallback={<Loader></Loader>}><ManageClasses></ManageClasses></Suspense>,
			},
			{
				path: '/dashboard/add-a-class',
				element: <Suspense fallback={<Loader></Loader>}><AddClass></AddClass></Suspense>,
			},
			// {
			// 	path: 'login',
			// 	element: <Suspense fallback={<Loader></Loader>}><Login></Login></Suspense>
			// },
			// {
			// 	path: 'registration',
			// 	element: <Suspense fallback={<Loader></Loader>}><Registration></Registration></Suspense>
			// },
			// {
			// 	path: 'password-reset',
			// 	element: <Suspense fallback={<Loader></Loader>}><PasswordReset></PasswordReset></Suspense>
			// },
			// {
			// 	path: 'profile',
			// 	element: <Suspense fallback={<Loader></Loader>}><Profile></Profile></Suspense>
			// },
			// {
			// 	path: 'contact',
			// 	element: <Suspense fallback={<Loader></Loader>}><Contact></Contact></Suspense>
			// },
			// {
			// 	path: 'about',
			// 	element: <Suspense fallback={<Loader></Loader>}><About></About></Suspense>
			// }
		]
	}
]);
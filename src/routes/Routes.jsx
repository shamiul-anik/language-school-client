/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../pages/shared/Loader/Loader";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const ErrorPage = lazy(() => import("../pages/shared/ErrorPage/ErrorPage"));
const Home = lazy(() => import("../pages/Home/Home"));

// const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Login = lazy(() => import("../pages/Authentication/Login/Login"));
const Registration = lazy(() => import("../pages/Authentication/Registration/Registration"));
// const PasswordReset = lazy(() => import("../pages/Authentication/PasswordReset/PasswordReset"));
// const Profile = lazy(() => import("../pages/Authentication/Profile/Profile"));

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
				path: 'login',
				element: <Suspense fallback={<Loader></Loader>}><Login></Login></Suspense>
			},
			{
				path: 'registration',
				element: <Suspense fallback={<Loader></Loader>}><Registration></Registration></Suspense>
			},
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
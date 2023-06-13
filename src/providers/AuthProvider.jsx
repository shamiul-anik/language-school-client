import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../utilities/firebase.config';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userRole, setUserRole] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if(user) {
			axios(`${import.meta.env.VITE_API_URL}/users/${user?.email}`).then(
				(data) => {
					setUserRole(data?.data?.role);
				}
			);
		}
	}, [user]);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	}
	
	const resetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	}

	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleAuthProvider);
	}
	
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			console.log('Auth Change Observer', loggedInUser)
			setUser(loggedInUser);
			setLoading(false);
		})

		return () => {
			unSubscribe();
		}
	}, [])

	const authInfo = {
		user,
		setUser,
		userRole, 
		setUserRole,
		loading,
		setLoading,
		createUser,
		logIn,
		resetPassword,
		signInWithGoogle,
		logOut
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
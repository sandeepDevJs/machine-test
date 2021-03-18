import React, { useContext } from "react";
const AuthContext = React.createContext();

const Auth = ({ children }) => {
	const currentUser = () => JSON.parse(localStorage.getItem("loginInfo"));

	const signUp = (email, pass) => {
		localStorage.setItem("loginInfo", JSON.stringify({ email, pass }));
		return true;
	};

	const login = (email, pass) => {
		if (!currentUser()) {
			return false;
		}
		if (currentUser().email === email && currentUser().pass === pass) {
			localStorage.setItem(
				"loginInfo",
				JSON.stringify({ ...currentUser(), isLoggedIn: true })
			);
			return true;
		}
		return false;
	};

	const logOut = () =>
		localStorage.setItem(
			"loginInfo",
			JSON.stringify({ ...currentUser(), isLoggedIn: false })
		);

	const changePassword = (pass) =>
		localStorage.setItem(
			"loginInfo",
			JSON.stringify({ ...currentUser(), pass: pass })
		);

	const value = {
		currentUser,
		signUp,
		login,
		logOut,
		changePassword,
	};

	return (
		<div>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</div>
	);
};

export const useAuth = () => useContext(AuthContext);

export default Auth;

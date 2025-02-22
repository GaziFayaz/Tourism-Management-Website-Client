/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
  const location = useLocation()

	if (loading) {
		return (
			<div className="flex justify-center ">
				<span className="loading loading-spinner loading-lg text-accent-pink "></span>
			</div>
		);
	}

	if (user) {
		return children;
	}
	return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;

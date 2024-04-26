import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
	return (
		<div className="font-poppins min-h-screen flex flex-col justify-between bg-bg-light">
			<Navbar></Navbar>
			<div className="mx-6 md:mx-12 lg:mx-32">
        <div>Root</div>
				<Outlet></Outlet>
				<ToastContainer />
			</div>

			<Footer></Footer>
		</div>
	);
};

export default Root;
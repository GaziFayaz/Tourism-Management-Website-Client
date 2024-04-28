import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import AddTouristSpot from "../Components/AddTouristSpot/AddTouristSpot";
import AllTouristSpots from "../Components/AllTouristSpots/AllTouristSpots";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/all-tourist-spots",
				element: <AllTouristSpots></AllTouristSpots>,
        loader: () => fetch("http://localhost:5000/tourist-spots")
			},
			{
				path: "/add-tourist-spot",
				element: (
					<PrivateRoutes>
						<AddTouristSpot></AddTouristSpot>
					</PrivateRoutes>
				),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
]);

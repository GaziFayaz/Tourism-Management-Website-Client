import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import AddTouristSpot from "../Components/AddTouristSpot/AddTouristSpot";
import AllTouristSpots from "../Components/AllTouristSpots/AllTouristSpots";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

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
        element: <AllTouristSpots></AllTouristSpots>
      },
      {
        path: "/add-tourist-spot",
        element: <AddTouristSpot></AddTouristSpot>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
])
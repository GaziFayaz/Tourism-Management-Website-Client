import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Countries from "../Countries/Countries";
import HomeTouristSpots from "../HomeTouristSpots/HomeTouristSpots";

const Home = () => {
	return (
		<div className="flex-1 flex flex-col items-center gap-24">
			<Helmet>
				<title>GlobalGuide | Home</title>
			</Helmet>
			<Banner></Banner>
      <HomeTouristSpots></HomeTouristSpots>
      <Countries></Countries>
		</div>
	);
};

export default Home;

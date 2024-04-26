import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
	return (
		<div className="flex-1 flex flex-col items-center gap-24">
			<Helmet>
				<title>GlobalGuide | Home</title>
			</Helmet>
			<Banner></Banner>
		</div>
	);
};

export default Home;

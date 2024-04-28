import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AllTouristSpots = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	const touristSpots = useLoaderData();
	return (
		<div className="flex flex-col items-center text-center w-full">
			<h1 className="text-7xl font-bold text-accent-cyan">Tourist Spots</h1>
			<p className="w-3/4 text-xl mt-5 font-medium">
				<span className="font-bold">Explore</span> and{" "}
				<span className="font-bold">Find</span> the Best Tourist Spot for{" "}
				<span className="font-bold">You!</span>
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-14">
				{touristSpots.map((touristSpot) => {
					console.log(touristSpot);
					return (
						<div
							key={touristSpot._id}
							data-aos="zoom-in"
							className="card card-compact bg-base-100 shadow-xl w-full h-full"
						>
							<figure>
								<img
									src={touristSpot.img_url}
									alt="Shoes"
									className="h-[250px] w-full object-cover"
								/>
							</figure>
							<div className="card-body gap-1">
								<div>
									<h2 className="card-title text-left font-bold text-2xl">
										{touristSpot.tourist_spot_name}
									</h2>
									<p className="text-left text-lg">
										{touristSpot.location}, {touristSpot.country_name}
									</p>
								</div>
								<div className="card-actions justify-end">
									<Link to={`../tourist-spot/${touristSpot._id}`}>
										<button className="btn bg-[#5356FF] text-white">
											See Details
										</button>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AllTouristSpots;

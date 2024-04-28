import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UserTouristSpots = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	const touristSpots = useLoaderData();
	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{touristSpots.map((touristSpot) => {
						return (
							<tr key={touristSpot._id}>
								<td>
									<div className="flex items-center gap-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src="/tailwind-css-component-profile-2@56w.png"
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">Hart Hagerty</div>
											<div className="text-sm opacity-50">United States</div>
										</div>
									</div>
								</td>
								<td>
									Zemlak, Daniel and Leannon
									<br />
									<span className="badge badge-ghost badge-sm">
										Desktop Support Technician
									</span>
								</td>
								<td>Purple</td>
								<th>
									<button className="btn btn-ghost btn-xs">details</button>
								</th>
							</tr>
						);
					})}
					
				</tbody>
				{/* foot */}
				<tfoot>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th></th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default UserTouristSpots;

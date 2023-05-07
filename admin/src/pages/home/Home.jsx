import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";
import { useHistory } from "react-router-dom";

export default function Home() {
	const history = useHistory();
	const [userStates, setUserStates] = useState([]);
	const admin =
		localStorage.getItem("persist:root") &&
		JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
			.currentUser
			? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
					.currentUser.isAdmin
			: false;
	useEffect(() => {
		if (admin) {
			history.push("/");
		} else {
			history.push("/login");
		}
	}, []);

	const MONTHS = useMemo(
		() => [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Agu",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		[]
	);

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await userRequest.get("/users/stats");
				res.data.map((item) => {
					setUserStates((prev) => [
						...prev,
						{ name: MONTHS[item._id - 1], "Active User": item.total },
					]);
				});
			} catch (err) {}
		};
		getStats();
	}, [MONTHS]);

	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={userStates}
				title="User Analytics"
				grid
				dataKey="Active User"
			/>
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}

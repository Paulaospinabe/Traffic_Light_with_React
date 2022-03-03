import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="Trafic-light">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"Light red " + (selectedColor === "red" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"Light yellow" + (selectedColor === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={
					"Light green" + (selectedColor === "green" ? " glow" : "")
				}></div>
		</div>
	);
}

export default Home;

import React from "react";
import { Dropdown } from "react-bootstrap";

const HomePage = () => {
	return (
		<div className="container">
			<br />
			<br />
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<br />
			<br />
			<br />
			<p>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta
				vel sequi praesentium mollitia quisquam et impedit cumque nesciunt eaque
				maiores assumenda, error modi? Nemo aliquam accusamus accusantium
				architecto illum.{" "}
			</p>
		</div>
	);
};

export default HomePage;

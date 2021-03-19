import React from "react";
import { Dropdown } from "react-bootstrap";

const DropDown = () => {
	return (
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
	);
};

export default DropDown;

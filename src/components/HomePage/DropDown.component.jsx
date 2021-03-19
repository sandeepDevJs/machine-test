import React from "react";
import { Dropdown } from "react-bootstrap";

const DropDown = ({ data, settext }) => {
	const onClickHandler = (text) => {
		settext(text);
	};

	return (
		<Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">
				Dropdown
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{data.length &&
					data.map((posts) => (
						<Dropdown.Item onClick={() => onClickHandler(posts.body)}>
							{posts.title}
						</Dropdown.Item>
					))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default DropDown;

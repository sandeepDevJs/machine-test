import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
	return (
		<>
			<Navbar variant="secondary">
				<LinkContainer to="/">
					<Navbar.Brand>LOGO</Navbar.Brand>
				</LinkContainer>
				<Nav className="mr-auto">
					<LinkContainer exact to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/tasks">
						<Nav.Link>Tasks</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/user">
						<Nav.Link>User</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		</>
	);
};

export default NavBar;

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
	return (
		<>
			<Navbar bg="secondary" variant="secondary">
				<LinkContainer className="navbar-brand" to="/">
					<Navbar.Brand>LOGO</Navbar.Brand>
				</LinkContainer>
				<Nav className="mr-auto">
					<LinkContainer className="nav-item" exact to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer className="nav-item" to="/tasks">
						<Nav.Link>Tasks</Nav.Link>
					</LinkContainer>
					<LinkContainer className="nav-item" to="/user">
						<Nav.Link>User</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		</>
	);
};

export default NavBar;

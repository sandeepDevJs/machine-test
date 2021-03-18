import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Loader from "./Loader.component";
import { useAuth } from "../contexts/AuthContext";

const User = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [err, seterr] = useState();
	const [loading, setloading] = useState(false);
	const [message, setMessage] = useState("");
	const history = useHistory();

	const { currentUser, changePassword, logOut } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		setloading(true);
		if (passwordRef.current.value.length < 5) {
			seterr("Password Length Must Be At Least 5 chars");
			setMessage("");
			return setloading(false);
		}
		if (passwordRef.current.value === passwordConfirmRef.current.value) {
			try {
				seterr("");
				setMessage("");
				changePassword(passwordRef.current.value);
				setloading(false);
				return setMessage("Password Changed Successfully!");
			} catch (er) {
				seterr(er.message);
			}
		} else {
			seterr("Passwords do not match!");
		}
		setloading(false);
		setMessage("");
	};

	return (
		<div className="d-flex align-items justify-content-center">
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Card>
					<Card.Body>
						{loading && <Loader />}
						{err && <Alert variant="danger">{err}</Alert>}
						{message && <Alert variant="success">{message}</Alert>}
						<Form onSubmit={handleSubmit}>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									ref={emailRef}
									required
									defaultValue={currentUser().email}
									disabled
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									ref={passwordRef}
									defaultValue={currentUser().pass}
									required
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Password Confirm</Form.Label>
								<Form.Control
									type="password"
									ref={passwordConfirmRef}
									defaultValue={currentUser().pass}
									required
								/>
							</Form.Group>
							<Button disabled={loading} className="w-100" type="submit">
								Change Password
							</Button>
						</Form>
					</Card.Body>
				</Card>
				<div className="w-100 text-center mt-2">
					<Button
						onClick={() => {
							logOut();
							history.push("/login");
						}}
					>
						Logout
					</Button>
				</div>
			</div>
		</div>
	);
};

export default User;

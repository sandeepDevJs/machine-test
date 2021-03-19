import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login.component";
import SignUp from "./components/SignUp.component";
import HomePage from "./components/HomePage/HomePage.component";
import NavBar from "./components/NavBar.component";
import Task from "./components/TaskPage/Task.component";
import User from "./components/User.component";
import PrivateRoute from "./components/PrivateRoute.component";
import AuthContext from "./contexts/AuthContext";

function App() {
	return (
		<AuthContext>
			<Router>
				<Container>
					<NavBar />
					<Switch>
						<PrivateRoute exact path="/" component={HomePage} />
						<PrivateRoute path="/tasks" component={Task} />
						<PrivateRoute path="/user" component={User} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
					</Switch>
				</Container>
			</Router>
		</AuthContext>
	);
}

export default App;

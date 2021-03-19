import React, { useState, useEffect } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import axios from "axios";
import Loader from "../Loader.component";
import AddModal from "./AddModal.component";

const Task = () => {
	const [data, setdata] = useState([]);
	const [err, seterr] = useState("");
	const [loading, setloading] = useState(true);
	const [show, setShow] = useState(false);

	//rerender flag
	const [value, setValue] = useState(0);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (e, task) => {
		e.preventDefault();
		task = task.trim();
		let taskDataFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))
			? JSON.parse(localStorage.getItem("tasks"))
			: [];
		let tasks = [];
		if (taskDataFromLocalStorage) {
			tasks = [...taskDataFromLocalStorage];
		}
		tasks.push({
			completed: false,
			title: task,
			id: Math.floor(Math.random() * 200 + 10),
		});

		localStorage.setItem("tasks", JSON.stringify(tasks));
		handleClose();
		setValue((value) => value + 1);
	};

	const deleteTask = (id) => {
		if (window.confirm("Are you sure?")) {
			let taskDataFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))
				? JSON.parse(localStorage.getItem("tasks"))
				: [];
			taskDataFromLocalStorage = taskDataFromLocalStorage.filter(
				(tdata) => tdata.id !== id
			);
			localStorage.setItem("tasks", JSON.stringify(taskDataFromLocalStorage));
			alert("Task Deleted!");
			setValue((value) => value + 1);
		}
	};

	useEffect(() => {
		axios
			.get("http://jsonplaceholder.typicode.com/todos")
			.then((res) => {
				let taskDataFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))
					? JSON.parse(localStorage.getItem("tasks"))
					: [];
				setdata([...taskDataFromLocalStorage, ...res.data.slice(0, 4)]);
				setloading(false);
			})
			.catch((err) => {
				err.response && err.response.data.message
					? seterr(err.response.data.message)
					: seterr(err.message);

				setloading(false);
			});
	}, [value]);

	return (
		<div className="w-100" style={{ maxWidth: "1000px" }}>
			{loading && <Loader />}
			{err && <Alert variant="danger">{err}</Alert>}
			<Table hover>
				<tbody>
					{data.length ? (
						data.map((todo) => (
							<tr key={todo.id}>
								<td>{todo.id}</td>
								<td>{todo.title}</td>
								<td>{todo.completed.toString()}</td>
								<td>
									<Button variant="danger" onClick={() => deleteTask(todo.id)}>
										Delete
									</Button>
								</td>
							</tr>
						))
					) : (
						<tr colSpan={4}>
							<td>No Data Found!</td>
						</tr>
					)}
				</tbody>
			</Table>
			<Button onClick={handleShow} variant="primary">
				Add Task
			</Button>
			<AddModal
				show={show}
				handleClose={handleClose}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default Task;

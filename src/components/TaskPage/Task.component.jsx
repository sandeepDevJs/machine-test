import React, { useState, useEffect } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import axios from "axios";
import Loader from "../Loader.component";
import AddModal from "./AddModal.component";

const Task = () => {
	const [err, seterr] = useState("");
	const [loading, setloading] = useState(true);

	//rerender flag
	const [value, setValue] = useState(0);

	//for Modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//on Submitting(Adding Via Modal) task
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

		//set tasks in local storage
		localStorage.setItem("tasks", JSON.stringify(tasks));
		handleClose();

		//set rerender
		setValue((value) => value + 1);
	};

	const deleteTask = (id) => {
		if (window.confirm("Are you sure?")) {
			let taskDataFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))
				? JSON.parse(localStorage.getItem("tasks"))
				: [];
			//filter out
			taskDataFromLocalStorage = taskDataFromLocalStorage.filter(
				(tdata) => tdata.id !== id
			);
			//set tasks in local storage
			localStorage.setItem("tasks", JSON.stringify(taskDataFromLocalStorage));
			alert("Task Deleted!");

			//set rerender
			setValue((value) => value + 1);
		}
	};

	useEffect(() => {
		//if local storage has no data then
		if (
			!JSON.parse(localStorage.getItem("tasks")) ||
			!JSON.parse(localStorage.getItem("tasks")).length
		) {
			axios
				.get("http://jsonplaceholder.typicode.com/todos")
				.then((res) => {
					localStorage.setItem("tasks", JSON.stringify(res.data.slice(0, 6)));
					setloading(false);
				})
				.catch((err) => {
					err.response && err.response.data.message
						? seterr(err.response.data.message)
						: seterr(err.message);

					setloading(false);
				});
		}
		setloading(false);
	}, [value]);

	return (
		<div className="w-100" style={{ maxWidth: "1000px" }}>
			{loading && <Loader />}
			{err && <Alert variant="danger">{err}</Alert>}
			<Table hover>
				<tbody>
					{JSON.parse(localStorage.getItem("tasks")) &&
					JSON.parse(localStorage.getItem("tasks")).length ? (
						JSON.parse(localStorage.getItem("tasks")).map((todo) => (
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

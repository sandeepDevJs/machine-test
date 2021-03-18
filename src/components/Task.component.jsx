import React from "react";
import { Table, Button } from "react-bootstrap";

const Task = () => {
	return (
		<div className="w-100" style={{ maxWidth: "1000px" }}>
			<Table hover>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>
							<Button variant="danger">Delete</Button>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>
							<Button variant="danger">Delete</Button>
						</td>
					</tr>
				</tbody>
			</Table>
			<Button variant="primary">Add Task</Button>
		</div>
	);
};

export default Task;

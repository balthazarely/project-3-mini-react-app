import React from 'react';

const Employees = (props) => {
	console.log(props, 'props in EmployeeList');

	const employeeList = props.employees.map((employee) => {
		return (
			<li key={employee._id}>
				<span>{employee.name} </span><br/>
				<span>{employee.position} </span><br/>
				<span>{employee.department} </span><br/>
				<button onClick={props.deleteEmployee.bind(null, employee._id)}>Delete</button>
				<button onClick={props.showModal.bind(null, employee)}>Edit</button>
			</li>
			)
	})
	return (
		<div>
			<h3>Employees</h3>
				<ul>
					{employeeList}
				</ul>
		</div>
		)
}

export default Employees;
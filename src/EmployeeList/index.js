import React from 'react';
import { Link } from 'react-router-dom';

const Employees = (props) => {
	// console.log(props, 'props in EmployeeList');
	// console.log(props.employees, 'props.employees');
	const employeeList = props.employees.map((employee) => {
		return (
			<li key={employee._id}>
				<span><Link to={ "/employee/" + employee._id }>{employee.name} </Link></span><br/>
				<span>{employee.position} </span><br/>
				<span>{employee.department} </span><br/>
				<button onClick={props.showEmployee.bind(null, employee._id)}>Map</button>
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
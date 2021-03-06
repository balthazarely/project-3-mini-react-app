import React from 'react';
import {Form, Button, Label} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const dateConverter = (employee) => {
	let newDate = this.employee.birthDate;
	return newDate.split('T')[0];
}


const Employees = (props) => {
	console.log(props, 'props in EmployeeList');

	const employeeList = props.employees.map((employee) => {
		return (
			<tr key={employee._id}>
				<td>{employee.name} </td>
				<td>{employee.position} </td>
				<td>{employee.department} </td>
				<td>${employee.annualSalary} </td>
				<td>{employee.birthDate}</td>				
				<div class="ui buttons mini">
					<button class="ui button" onClick={props.showEmployee.bind(null, employee._id)}>Map</button>
					<button class="ui button" onClick={props.showModal.bind(null, employee)}>Edit</button>
					<button class="ui button" onClick={props.deleteEmployee.bind(null, employee._id)}>Delete</button>
				</div>
				
				
			</tr>
			)
	})
	return (
		<div>
			 <table class="ui unstackable inverted teal table ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>DOB</th>
						<th>Actions</th>
                    </tr>
                </thead>
                <tbody>
					{employeeList}
				</tbody>
            </table>   
		</div>
		)
}

export default Employees;
import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react'


class CreateEmployee extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			position: '',
			birthDate: '',
			department: '',
			annualSalary: ''
		}
	}

	updateEmployee = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	render() {
		return (
			<div>
			<h3>Create New Employee</h3>
				<form form onSubmit={this.props.addEmployee.bind(null, this.state)} class="ui form">
				<div class="five fields">
					<div class="field">
						<label>Name</label>
						<input type="text" name="name" onChange={this.updateEmployee} value={this.state.name} />
					</div>
					<div class="field">
						<label>Position</label>
						<input type="text" name="position" onChange={this.updateEmployee} value={this.state.position} />
					</div>
					<div class="field">
						<label>Department</label>
						<input type="text" name="department" onChange={this.updateEmployee} value={this.state.department} />
					</div>
					<div class="field">
						<label>Birthday</label>
						<input type="date" name="birthDate" onChange={this.updateEmployee} value={this.state.birthDate} />
					</div>
					<div class="field">
						<label>Annual Salary</label>
						<input type="number" name="annualSalary" onChange={this.updateEmployee} value={this.state.annualSalary} />
					</div>
				</div>
				<div className="centerme">
					<Button class="teal " type="submit">
						Create Employee
					</Button>
				</div>
			</form>
		</div>
			)
	}
}

export default CreateEmployee;


		
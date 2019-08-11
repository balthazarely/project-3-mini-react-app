import React, { Component } from 'react';

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
			<form onSubmit={this.props.addEmployee.bind(null, this.state)}>
				<label htmlFor="name">Name:
					<input type="text" name="name" onChange={this.updateEmployee} value={this.state.name} />
				</label>
				<label htmlFor="position">Title:
					<input type="text" name="position" onChange={this.updateEmployee} value={this.state.position} />
				</label>
				<label htmlFor="birthDate">Birth Date:
					<input type="date" name="birthDate" onChange={this.updateEmployee} value={this.state.birthDate} />
				</label>
				<label htmlFor="department">Department:
					<input type="text" name="department" onChange={this.updateEmployee} value={this.state.department} />
				</label>
				<label htmlFor="annualSalary">Salary:
					<input type="text" name="annualSalary" onChange={this.updateEmployee} value={this.state.annualSalary} />
				</label>
				<button type="submit">
					Add New Employee
				</button>
			</form>
			)
	}
}

export default CreateEmployee;
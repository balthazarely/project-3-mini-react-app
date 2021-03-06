import React, { Component } from 'react';
import { Form, Button, Label, Input } from 'semantic-ui-react'


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

	handleClear = () => {
		this.setState({
			name: '',
			position: '',
			birthDate: '',
			department: '',
			annualSalary: ''
		})
	}

	render() {
		return (
			<div>
			<h3>Create New Employee</h3>
				<Form form onSubmit={this.props.addEmployee.bind(null, this.state)} onReset={this.handleClear} class="ui form">
				<div class="five fields">
					<div class="field">
						Name
						<Input type="text" name="name" onChange={this.updateEmployee} value={this.state.name} />
					</div>
					<div class="field">
						Position
						<Input type="text" name="position" onChange={this.updateEmployee} value={this.state.position} />
					</div>
					<div class="field">
						Department
						<Input type="text" name="department" onChange={this.updateEmployee} value={this.state.department} />
					</div>
					<div class="field">
						Birthday
						<Input type="date" name="birthDate" onChange={this.updateEmployee} value={this.state.birthDate} />
					</div>
					<div class="field">
						Annual Salary
						<input type="number" name="annualSalary" onChange={this.updateEmployee} value={this.state.annualSalary} />
					</div>
				</div>
				<div className="centerme">
					<Button class="teal " type="submit">
						Create Employee
					</Button>
					<Button class="teal " type="reset">
						Clear
					</Button>
				</div>
			</Form>
		</div>
			)
	}
}

export default CreateEmployee;


		
import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react';

const EditEmployee = (props) => {
	return (
		<div>
		<h4>Edit Employee</h4>
		<Form onSubmit={props.closeAndEdit}>
			<Label>
				Name Edit:
				<Form.Input type="text" name="name" onChange={props.handleFormChange} value={props.employeeToEdit.name} />
			</Label>
			<Label>
				Position Change:
				<Form.Input type="text" name="position" onChange={props.handleFormChange} value={props.employeeToEdit.position} />
			</Label>
			<Label>
				Birthday Edit:
				<Form.Input type="date" name="birthDate" onChange={props.handleFormChange} value={props.employeeToEdit.birthDate} />
			</Label>
			<Label>
				Deparment Change:
				<Form.Input type="text" name="department" onChange={props.handleFormChange} value={props.employeeToEdit.department} />
			</Label>
			<Label>
				Salary Change:
				<Form.Input type="text" name="salary" onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary} />
			</Label>
			<Button type="submit">
				Edit Employee Information
			</Button>
		</Form>
		</div>
		)
}

export default EditEmployee;
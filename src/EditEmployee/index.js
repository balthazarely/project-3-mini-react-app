import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react'

const EditEmployee = (props) => {
	return (
		<div className="ui-container">
		<h3>Edit Employee</h3>
			<form onSubmit={props.closeAndEdit} class="ui form">
				<div class="five fields">
					<div class="field">
						<label>Name</label>
						<input type="text" name="name" onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
					</div>
					<div class="field">
						<label>Position</label>
						<input type="text" name="position" onChange={props.handleFormChange} value={props.employeeToEdit.position} />
					</div>
					<div class="field">
						<label>Department</label>
						<input type="text" name="department" onChange={props.handleFormChange} value={props.employeeToEdit.department} />
					</div>
					<div class="field">
						<label>Birthday</label>
						<input type="text" name="birthDate" onChange={props.handleFormChange} value={props.employeeToEdit.birthDate}/>
					</div>
					<div class="field">
						<label>Annual Salary</label>
						<input type="text" name="annualSalary" onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary}/>
					</div>
				</div>
				<div className="centerme">
				<Button class="teal " type="submit">
						Submit
					</Button>
				</div>
			</form>
		</div>
		)
}

export default EditEmployee;


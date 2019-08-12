import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react';


class Register extends Component {
	constructor() {
		super();

		this.state = {
			username: '', 
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const register = await fetch('http://localhost:9000/auth/register', {
			method: 'POST', 
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedRegister = await register.json();
		console.log(parsedRegister, 'response from register');
		if(parsedRegister.status.message === 'User Logged In') {
			console.log('logged in');
			this.props.history.push('employee')
		}
	}

	render() {
		return (
			<div>
				<h3>Register</h3>
					<form onSubmit={this.handleSubmit} class="ui form">
						<div class="two fields">
							<div class="field">
								<label>Username</label>
								<input type='text' name='username' onChange={this.handleChange}/>
							</div>
							<div class="field">
								<label>Password</label>
								<input type='password' name='password' onChange={this.handleChange}/>
							</div>
						</div>
						<div className="centerme">
							<Button class="teal " type="submit">
								Register
							</Button>
						</div>
					</form>
				</div>
			)
	}
}

export default Register;


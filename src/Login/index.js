import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react';


class Login extends Component {
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
		const login = await fetch('http://localhost:9000/auth/login', {
			method: 'POST', 
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedLogin = await login.json();
		console.log(parsedLogin, 'response from login');
		if(parsedLogin.status.message === 'User Logged In') {
			console.log('logged in');
			this.props.history.push('employee')
		}
	}

	render() {
		return (
			<div>
				<h3>Login</h3>
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
								Login
							</Button>
						</div>
					</form>
				</div>
			)
	}
}

export default Login;


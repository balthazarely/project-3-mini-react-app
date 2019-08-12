import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';




const Header = () => {
	return (
		<div className="navbar">
			<div class="ui secondary pointing menu">
				<a class="item" href="/">
					Register
				</a>
				<a class="item"  href="/employee">
					Employees
				</a>
			</div>
		</div>



	)
}

export default Header;



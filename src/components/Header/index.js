import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Collapse,
	Navbar,
	Container,
	Nav,
	NavItem,
	NavbarToggler
} from 'reactstrap';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Container id="header">
				<Navbar color="faded" expand="md" className="menuTop">
					<Link to="/">Home</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link to="/topic/Political">Political</Link>
							</NavItem>
							<NavItem>
								<Link to="/topic/Sport">Sport</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</Container>
		);
	}
}
export default Header;
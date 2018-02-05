import React, { Component } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/style.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";


class Layout extends Component {
	render() {
		const { children } = this.props;
		return(
			<Container>
				<Header/>
				{children}
				<Footer />
			</Container>
		)
	}
}

export default Layout;
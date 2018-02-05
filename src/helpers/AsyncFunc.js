import React, { Component } from 'react';
import Nprogress from 'nprogress';
import Layout from '../containers/Layout'
import ReactPlaceholder from 'react-placeholder';
import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';

export default function asyncComponent(importComponent) {
	class AsyncFunc extends Component {
		constructor(props) {
			super(props);
			this.state = {
				component: null
			};
		}
		componentWillMount() {
			Nprogress.start();
		}

		async componentDidMount() {
			this.mounted = true;
			const { default: Component } = await importComponent();
			if (this.mounted) {
				this.setState({
					component: <Component {...this.props} />
				});
				Nprogress.done();
			}
		}

		componentWillUnmount() {
			this.mounted = false;
		}

		render() {
			const Component = this.state.component || <div />;
			return (
				<ReactPlaceholder type="text" rows={7} ready={Component !== null}>
					<Layout>
						{Component}
					</Layout>
				</ReactPlaceholder>
			);
		}
	}
	return AsyncFunc;
}

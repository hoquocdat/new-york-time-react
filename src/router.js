import React from 'react';
import { Router, Route } from 'react-router';
import { connect } from 'react-redux';
import asyncComponent from './helpers/AsyncFunc';


const PublicRoutes = ({ history }) => {
	return (
		<Router history={history}>
			<div>
				<Route
					exact
					path={'/'}
					component={asyncComponent(() => import('./containers/Home'))}
				/>
					<Route
						path="/topic/:topicSlug"
						component={asyncComponent(() => import('./containers/Topic'))}
					/>
			</div>
		</Router>
	);
};

export default connect(state => ({}))(PublicRoutes);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './redux/store';
import PublicRoutes from './router';


ReactDOM.render(
		<Provider store={store}>
			<PublicRoutes history={history} />
		</Provider>,
		document.getElementById('root')
	);
registerServiceWorker();
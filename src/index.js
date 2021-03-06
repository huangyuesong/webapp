import React from 'react';

import {
	render,
} from 'react-dom';

import {
	Router,
	Route,
	browserHistory,
} from 'react-router';

import './polyfill/index';

import './styles/_normalize.scss';

import Login from './modules/Login';
import MapView from './modules/MapView';
import Management from './modules/Management';
import SiteDetail from './modules/SiteDetail';

render((
  	<Router history={browserHistory}>
  		<Route path="/" component={Login} />
  		<Route path="/Map" component={MapView} />
  		<Route path='/Management' component={Management} />
  		<Route path='/SiteDetail' component={SiteDetail} />
  	</Router>
), document.getElementById('app'));

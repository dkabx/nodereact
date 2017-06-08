import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './navbar/nav';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import Content from './content';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux/store'
import './index.css';
import setAuthorizationToken from './redux/utils';
setAuthorizationToken(localStorage.getItem('jwtToken'));

var history = createHistory();
ReactDOM.render( 
<Provider store={store}>
 <Router history={ history }>
	<div>
	<Route path='/' component={Nav} />
	<Route exact path='/user/login' component={Content} />
	
	</div>
	</Router>
		</Provider>
	, document.getElementById('root'));
registerServiceWorker();

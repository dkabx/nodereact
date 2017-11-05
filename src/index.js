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
import {setCurrentUser} from './redux/actions/login';
import jwt from 'jsonwebtoken';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:5000");
if(localStorage.getItem('jwtToken')){

setAuthorizationToken(localStorage.getItem('jwtToken'));
store.dispatch(setCurrentUser(jwt.decode(localStorage.getItem('jwtToken'))));
}


var history = createHistory();
ReactDOM.render(
	<SocketProvider socket={socket}>
<Provider store={store} >
 <Router history={ history } socket={socket}>
	<div>
	<Route path='/' component={Nav} />


	</div>
	</Router>
		</Provider>
		</SocketProvider>
	, document.getElementById('root'));
registerServiceWorker();

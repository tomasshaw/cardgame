import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import AppBar from './components/AppBar';
import GameView from './views/GameView';
import { PrivateRoute } from './components/helpers/PrivateRoute';

function App() {
	return (
		<Router>
			<div className="App">
				<AppBar />
				<Switch>
					<Route path='/login' component={Login} />
					<PrivateRoute path='/game' component={GameView} />
					<Route path='/' component={Login} />
					<Login />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

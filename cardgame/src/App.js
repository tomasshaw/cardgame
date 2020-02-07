import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
//import Lato from './components/fonts/Lato-Regular.ttf';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Login from './components/login';
import AppBar from './components/AppBar';
import GameView from './views/GameView';
import { PrivateRoute } from './components/helpers/PrivateRoute';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Lato',
	},
});

const styles = theme => ({
	root: {
		//display: 'flex',
		height: '100%',
		width: '100%',
	},
});

function App(props) {
	const { classes } = props;
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className="App">
					<div className={classes.root}>
						<AppBar />
						<Switch>
							<Route path="/login" component={Login} />
							<PrivateRoute path="/game" component={GameView} />
							<Route path="/" component={Login} />
							<Login />
						</Switch>
					</div>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default withStyles(styles)(App);

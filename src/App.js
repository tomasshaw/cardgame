// React
import React from 'react';

// Css
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blueGrey from '@material-ui/core/colors/blueGrey';
//import Lato from './components/fonts/Lato-Regular.ttf';
// Plugins
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Componentes mios
import Login from './components/login';
import AppBar from './components/AppBar';
import GameView from './views/GameView';
import { PrivateRoute } from './helpers/PrivateRoute';
import backgroundImage from './images/backgroundImage.jpg';

//Todo: Configurar webpack, dejar de usar rutas relativas
//
//NOTAS:
//  hearthstone estilos:
//		typography h1 : fontFamily: Belwe Bold;
//		                letterSpacing: -.5px;
//		                textShadow: 0 2px 4px rgba(0,0,0,.5);

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#f1d4ab',
			//main: '#fcd144',
		},
		secondary: {
			main: '#00aeff',
		},
		background: {
			default: blueGrey[900],
			dark: blueGrey[900],
		},
	},

	typography: {
		fontFamily: 'Open Sans',
	},
});

const styles = theme => ({
	root: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'auto',
		//display: 'flex',
		height: '100vh',
		width: '100vw',
	},
});

function App(props) {
	const { classes } = props;
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
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

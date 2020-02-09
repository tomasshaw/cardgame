// React
import React from 'react';

// Css
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import grey from '@material-ui/core/colors/grey';
//import Lato from './components/fonts/Lato-Regular.ttf';
// Plugins
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Componentes mios
import Login from './components/login';
import AppBar from './components/AppBar';
import GameView from './views/GameView';
import { PrivateRoute } from './helpers/PrivateRoute';

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
			// light: will be calculated from palette.primary.main,
			main: '#fcd144',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			//light: '#0066ff',
			main: '#00aeff',
			// dark: will be calculated from palette.secondary.main,
			//contrastText: '#ffcc00',
		},
		// error: will use the default color
		background: {
			dark: grey[900],
		},
	},

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
